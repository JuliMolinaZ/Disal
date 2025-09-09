'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Sparkles,
  Zap,
  Heart,
  Star,
  Trophy,
  Target,
  Rocket,
  Crown,
  Flame,
  Gift,
  Magic,
  Gem,
  ThumbsUp,
  Bolt,
  Lightbulb,
  CheckCircle,
  Download,
  Share,
  Copy,
  Bookmark,
  Eye,
  TrendingUp,
  Volume2,
  VolumeX,
  Play,
  Pause
} from 'lucide-react';

interface MicroInteractionProps {
  onExport?: (format: string) => void;
  onShare?: () => void;
  onBookmark?: () => void;
}

interface FloatingElement {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  duration: number;
}

interface Particle {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

export function EnhancedMicroInteractions({ onExport, onShare, onBookmark }: MicroInteractionProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [celebrationActive, setCelebrationActive] = useState(false);
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  // Sound effects (simulated with console logs)
  const playSound = (type: string) => {
    if (soundEnabled) {
      console.log(`🔊 Playing ${type} sound effect`);
    }
  };

  // Initialize floating elements
  useEffect(() => {
    const icons = [Sparkles, Star, Trophy, Crown, Flame, Gem, Heart, Zap];
    const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#ef4444', '#06b6d4', '#84cc16'];
    
    const elements: FloatingElement[] = Array.from({ length: 8 }, (_, i) => ({
      id: `floating-${i}`,
      icon: icons[i % icons.length],
      color: colors[i % colors.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: 0.5 + Math.random() * 0.5,
      rotation: Math.random() * 360,
      duration: 3 + Math.random() * 4
    }));
    
    setFloatingElements(elements);
  }, []);

  // Particle animation loop
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: particle.x + particle.vx,
        y: particle.y + particle.vy,
        vy: particle.vy + 0.1, // gravity
        life: particle.life - 1
      })).filter(particle => particle.life > 0));
      
      animationFrameRef.current = requestAnimationFrame(animateParticles);
    };
    
    animationFrameRef.current = requestAnimationFrame(animateParticles);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        setMousePosition({ x, y });
        cursorX.set(x);
        cursorY.set(y);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  // Create celebration particles
  const createCelebrationParticles = (x: number, y: number) => {
    const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];
    const newParticles: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: `particle-${Date.now()}-${i}`,
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 10,
      vy: (Math.random() - 0.5) * 10 - 5,
      life: 60,
      maxLife: 60,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 2 + Math.random() * 4
    }));
    
    setParticles(prev => [...prev, ...newParticles]);
  };

  // Enhanced button handlers
  const handleExport = async (format: string) => {
    setIsExporting(true);
    playSound('export');
    createCelebrationParticles(mousePosition.x, mousePosition.y);
    
    // Simulate export process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    onExport?.(format);
    setIsExporting(false);
    playSound('success');
  };

  const handleShare = () => {
    setIsShared(true);
    playSound('share');
    createCelebrationParticles(mousePosition.x, mousePosition.y);
    
    setTimeout(() => setIsShared(false), 2000);
    onShare?.();
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    playSound(isBookmarked ? 'unbookmark' : 'bookmark');
    createCelebrationParticles(mousePosition.x, mousePosition.y);
    
    onBookmark?.();
  };

  const startCelebration = () => {
    setCelebrationActive(true);
    playSound('celebration');
    
    // Create multiple bursts of particles
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const x = Math.random() * (containerRef.current?.clientWidth || 800);
        const y = Math.random() * (containerRef.current?.clientHeight || 600);
        createCelebrationParticles(x, y);
      }, i * 200);
    }
    
    setTimeout(() => setCelebrationActive(false), 3000);
  };

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              color: element.color,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [element.rotation, element.rotation + 360],
              scale: [element.scale, element.scale * 1.2, element.scale],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <element.icon className="w-6 h-6 opacity-20" />
          </motion.div>
        ))}
      </div>

      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="w-8 h-8 border-2 border-blue-500 rounded-full"
          animate={{
            scale: isHovering ? 1.5 : 1,
            borderColor: isHovering ? "#8b5cf6" : "#3b82f6"
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              opacity: particle.life / particle.maxLife,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-8 space-y-8">
        {/* Header with Sound Toggle */}
        <div className="flex justify-between items-center">
          <motion.h1 
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Micro-interacciones Premium
          </motion.h1>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => setSoundEnabled(!soundEnabled)}
              variant="outline"
              size="sm"
              className="border-white/20 text-white hover:bg-white/10"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </Button>
          </motion.div>
        </div>

        {/* Enhanced Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Export Button */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="group"
          >
            <Card className="glass-dark-premium hover:bg-white/15 transition-all duration-300 overflow-hidden">
              <CardContent className="p-6 text-center relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10"
                  animate={{ 
                    rotate: isExporting ? 360 : 0,
                    scale: isExporting ? 1.1 : 1 
                  }}
                  transition={{ duration: isExporting ? 2 : 0.3 }}
                >
                  {isExporting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Zap className="w-8 h-8 text-white" />
                    </motion.div>
                  ) : (
                    <Download className="w-8 h-8 text-white" />
                  )}
                </motion.div>
                
                <h3 className="text-white font-semibold mb-2 relative z-10">
                  {isExporting ? "Exportando..." : "Exportar Datos"}
                </h3>
                
                <div className="space-y-2 relative z-10">
                  <Button
                    onClick={() => handleExport('pdf')}
                    disabled={isExporting}
                    size="sm"
                    className="w-full micro-bounce bg-blue-600 hover:bg-blue-700"
                  >
                    PDF
                  </Button>
                  <Button
                    onClick={() => handleExport('excel')}
                    disabled={isExporting}
                    size="sm"
                    className="w-full micro-bounce bg-green-600 hover:bg-green-700"
                  >
                    Excel
                  </Button>
                </div>
                
                {isExporting && (
                  <motion.div 
                    className="absolute bottom-2 left-2 right-2 h-1 bg-blue-500/30 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="h-full bg-blue-500 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Share Button */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="group"
          >
            <Card className="glass-dark-premium hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  animate={{ 
                    scale: isShared ? [1, 1.2, 1] : 1,
                    rotate: isShared ? [0, 10, -10, 0] : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {isShared ? (
                    <CheckCircle className="w-8 h-8 text-white" />
                  ) : (
                    <Share className="w-8 h-8 text-white" />
                  )}
                </motion.div>
                
                <h3 className="text-white font-semibold mb-4">
                  {isShared ? "¡Compartido!" : "Compartir Reporte"}
                </h3>
                
                <Button
                  onClick={handleShare}
                  size="sm"
                  className="w-full micro-bounce bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <Share className="w-4 h-4 mr-2" />
                  Compartir
                </Button>
                
                <AnimatePresence>
                  {isShared && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="absolute -top-2 -right-2"
                    >
                      <Badge className="bg-green-500 text-white animate-bounce">
                        <Sparkles className="w-3 h-3" />
                      </Badge>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bookmark Button */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="group"
          >
            <Card className="glass-dark-premium hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <motion.div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isBookmarked 
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500' 
                      : 'bg-gradient-to-r from-gray-500 to-gray-600'
                  }`}
                  animate={{ 
                    scale: isBookmarked ? [1, 1.1, 1] : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ 
                      rotate: isBookmarked ? [0, 15, -15, 0] : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Bookmark 
                      className={`w-8 h-8 ${isBookmarked ? 'text-white fill-white' : 'text-white'}`} 
                    />
                  </motion.div>
                </motion.div>
                
                <h3 className="text-white font-semibold mb-4">
                  {isBookmarked ? "Guardado" : "Guardar Reporte"}
                </h3>
                
                <Button
                  onClick={handleBookmark}
                  size="sm"
                  className={`w-full micro-bounce ${
                    isBookmarked 
                      ? 'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700'
                      : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800'
                  }`}
                >
                  <Bookmark className="w-4 h-4 mr-2" />
                  {isBookmarked ? "Guardado" : "Guardar"}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Celebration Button */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="group"
          >
            <Card className="glass-dark-premium hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  animate={{ 
                    scale: celebrationActive ? [1, 1.2, 1] : 1,
                    rotate: celebrationActive ? [0, 180, 360] : 0
                  }}
                  transition={{ duration: celebrationActive ? 1 : 0.3, repeat: celebrationActive ? 3 : 0 }}
                >
                  <Trophy className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-white font-semibold mb-4">
                  {celebrationActive ? "¡Celebrando!" : "Celebrar Éxito"}
                </h3>
                
                <Button
                  onClick={startCelebration}
                  size="sm"
                  disabled={celebrationActive}
                  className="w-full micro-bounce bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                >
                  <Trophy className="w-4 h-4 mr-2" />
                  {celebrationActive ? "Celebrando..." : "Celebrar"}
                </Button>
                
                {celebrationActive && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                        initial={{ 
                          x: "50%", 
                          y: "50%", 
                          scale: 0 
                        }}
                        animate={{ 
                          x: `${50 + 40 * Math.cos(i * Math.PI / 4)}%`,
                          y: `${50 + 40 * Math.sin(i * Math.PI / 4)}%`,
                          scale: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 1, 
                          delay: i * 0.1,
                          repeat: 2 
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Interactive Elements Showcase */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Elementos Interactivos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Hover Card */}
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5
              }}
              className="group perspective-1000"
            >
              <Card className="glass-dark-premium hover:bg-white/15 transition-all duration-500 transform-gpu">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Eye className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-white font-semibold mb-2">Hover 3D</h3>
                  <p className="text-slate-300 text-sm">Efecto de profundidad al pasar el mouse</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Click Feedback */}
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
              onClick={() => playSound('click')}
            >
              <Card className="glass-dark-premium hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileTap={{ scale: 0.8, rotate: 45 }}
                  >
                    <ThumbsUp className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-white font-semibold mb-2">Click Feedback</h3>
                  <p className="text-slate-300 text-sm">Respuesta visual al hacer clic</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pulse Effect */}
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(244, 63, 94, 0.3)",
                  "0 0 40px rgba(244, 63, 94, 0.6)",
                  "0 0 20px rgba(244, 63, 94, 0.3)"
                ]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="cursor-pointer"
            >
              <Card className="glass-dark-premium hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-white font-semibold mb-2">Pulse</h3>
                  <p className="text-slate-300 text-sm">Animación de pulsación continua</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Badge 
            className={`animate-pulse ${
              soundEnabled ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
            }`}
          >
            Audio: {soundEnabled ? 'Activado' : 'Desactivado'}
          </Badge>
          
          <Badge className="bg-blue-500/20 text-blue-300">
            Partículas Activas: {particles.length}
          </Badge>
          
          <Badge className="bg-purple-500/20 text-purple-300">
            Mouse: {Math.round(mousePosition.x)}, {Math.round(mousePosition.y)}
          </Badge>
        </div>
      </div>
    </div>
  );
}