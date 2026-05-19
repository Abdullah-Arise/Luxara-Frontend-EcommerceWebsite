import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

const JEWELRY_TEXTURE_URL = '/canvas/hero-jewelry.png';

const hasWebGLSupport = () => {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
  } catch {
    return false;
  }
};

class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.warn('Luxury canvas failed to render:', error);
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

const CanvasFallback = () => (
  <div className="flex h-full w-full items-center justify-center">
    <div className="relative h-48 w-48 rounded-full border-[18px] border-amber-300/70 shadow-[0_0_80px_rgba(214,180,106,0.35)]">
      <div className="absolute -right-6 top-8 h-16 w-16 rotate-12 border-[12px] border-amber-200/80 shadow-[0_0_40px_rgba(240,209,136,0.35)]" />
      <div className="absolute left-8 top-6 h-10 w-10 rotate-45 border border-white/40 bg-white/10" />
    </div>
  </div>
);

const getScrollProgress = () => {
  if (typeof document === 'undefined' || typeof window === 'undefined') return 0;
  const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
  return Math.min(1, Math.max(0, window.scrollY / maxScroll));
};

const createGlowTexture = () => {
  if (typeof document === 'undefined') return null;

  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;

  const context = canvas.getContext('2d');
  const gradient = context.createRadialGradient(256, 128, 12, 256, 128, 246);
  gradient.addColorStop(0, 'rgba(214, 180, 106, 0.48)');
  gradient.addColorStop(0.36, 'rgba(214, 180, 106, 0.2)');
  gradient.addColorStop(1, 'rgba(214, 180, 106, 0)');

  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
};

const CanvasJewelryFallback = () => {
  const fallbackRef = useRef(null);

  useFrame((state, delta) => {
    if (!fallbackRef.current) return;

    fallbackRef.current.rotation.y = THREE.MathUtils.damp(
      fallbackRef.current.rotation.y,
      Math.sin(state.clock.elapsedTime * 0.35) * 0.14,
      3,
      delta
    );
    fallbackRef.current.position.y = THREE.MathUtils.damp(
      fallbackRef.current.position.y,
      Math.sin(state.clock.elapsedTime * 0.7) * 0.08,
      3,
      delta
    );
  });

  return (
    <group ref={fallbackRef}>
      <mesh scale={[2.8, 1.35, 1]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="#d6b46a" transparent opacity={0.12} depthWrite={false} />
      </mesh>
      <mesh scale={[2.2, 1.08, 1]} position={[0, 0, 0.02]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="#f0d188" transparent opacity={0.18} wireframe />
      </mesh>
    </group>
  );
};

const JewelryImageObject = () => {
  const groupRef = useRef(null);
  const glowTexture = useMemo(() => createGlowTexture(), []);
  const { pointer } = useThree();
  const [texture, setTexture] = useState(null);
  const [textureFailed, setTextureFailed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const syncMobileState = () => setIsMobile(media.matches);

    syncMobileState();
    media.addEventListener('change', syncMobileState);
    return () => media.removeEventListener('change', syncMobileState);
  }, []);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    let cancelled = false;
    let loadedTexture;

    loader.load(
      JEWELRY_TEXTURE_URL,
      (nextTexture) => {
        loadedTexture = nextTexture;
        nextTexture.colorSpace = THREE.SRGBColorSpace;
        nextTexture.anisotropy = 8;
        nextTexture.needsUpdate = true;

        if (!cancelled) setTexture(nextTexture);
      },
      undefined,
      () => {
        if (!cancelled) setTextureFailed(true);
      }
    );

    return () => {
      cancelled = true;
      loadedTexture?.dispose();
    };
  }, []);

  useEffect(() => () => glowTexture?.dispose(), [glowTexture]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const scrollT = getScrollProgress();
    const elapsed = state.clock.elapsedTime;
    const floatY = Math.sin(elapsed * 0.75) * 0.08;
    const idleX = Math.sin(elapsed * 0.34) * 0.05;
    const idleY = Math.sin(elapsed * 0.28) * 0.12;
    const targetX = isMobile ? idleX : (pointer.y * 0.28) + idleX + (scrollT * 0.16);
    const targetY = isMobile ? idleY : (pointer.x * 0.48) + idleY + (scrollT * 0.26);
    const targetZ = Math.sin(elapsed * 0.42) * 0.04;

    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      targetX,
      6,
      delta
    );
    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      targetY,
      6,
      delta
    );
    groupRef.current.rotation.z = THREE.MathUtils.damp(
      groupRef.current.rotation.z,
      targetZ,
      6,
      delta
    );

    const targetScale = 1.06 + (scrollT * 0.08);
    const nextScale = THREE.MathUtils.damp(groupRef.current.scale.x, targetScale, 5, delta);
    groupRef.current.scale.setScalar(nextScale);
    groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, floatY, 4, delta);
  });

  if (textureFailed) return <CanvasJewelryFallback />;

  return (
    <group ref={groupRef}>
      {glowTexture ? (
        <mesh position={[0, -0.03, -0.08]} scale={[3.15, 1.65, 1]}>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial
            map={glowTexture}
            transparent
            opacity={0.82}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ) : null}

      <mesh position={[0, 0, 0.02]}>
        <planeGeometry args={[2.7, 1.35]} />
        {texture ? (
          <meshBasicMaterial map={texture} transparent toneMapped={false} />
        ) : (
          <meshBasicMaterial color="#d6b46a" transparent opacity={0.14} />
        )}
      </mesh>

      <mesh position={[0, -0.38, -0.16]} rotation={[-0.72, 0, 0]} scale={[2.2, 0.38, 1]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.28} depthWrite={false} />
      </mesh>
    </group>
  );
};

const LuxuryCanvas = () => {
  const [canRenderCanvas, setCanRenderCanvas] = useState(false);

  useEffect(() => {
    setCanRenderCanvas(hasWebGLSupport());
  }, []);

  if (!canRenderCanvas) return <CanvasFallback />;

  return (
    <CanvasErrorBoundary fallback={<CanvasFallback />}>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.2, 3.2], fov: 42 }}
        gl={{ alpha: true, antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 6, 5]} intensity={2.2} color={'#fff7dc'} />
        <pointLight position={[-4, -2, 2]} intensity={1.6} color={'#f0d188'} />

        <JewelryImageObject />
      </Canvas>
    </CanvasErrorBoundary>
  );
};

export default LuxuryCanvas;
