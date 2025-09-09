'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Share2,
  Download,
  Bookmark,
  Heart
} from 'lucide-react';

interface MicroInteractionsProps {
  onExport?: (format: string) => void;
  onShare?: () => void;
  onBookmark?: () => void;
}

export function MicroInteractions({ onExport, onShare, onBookmark }: MicroInteractionsProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    onBookmark?.();
  };
  
  const toggleLike = () => setIsLiked(!isLiked);

  return (
    <div className="fixed bottom-6 right-6 pointer-events-auto z-50">
      {/* Simplified Action Buttons */}
      <div className="flex flex-col space-y-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onExport?.('pdf')}
          className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white shadow-lg transition-colors"
          title="Descargar PDF"
        >
          <Download className="w-5 h-5" />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onShare}
          className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center text-white shadow-lg transition-colors"
          title="Compartir"
        >
          <Share2 className="w-5 h-5" />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleBookmark}
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors ${
            isBookmarked 
              ? 'bg-yellow-500 hover:bg-yellow-600 text-white' 
              : 'bg-gray-600 hover:bg-gray-700 text-white'
          }`}
          title="Marcar como favorito"
        >
          <Bookmark className="w-5 h-5" />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleLike}
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors ${
            isLiked 
              ? 'bg-red-500 hover:bg-red-600 text-white' 
              : 'bg-gray-600 hover:bg-gray-700 text-white'
          }`}
          title="Me gusta"
        >
          <Heart className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}