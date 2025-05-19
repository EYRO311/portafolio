import React from 'react';
import { motion } from 'framer-motion';
import './SpotifyPlayer.css';

const playlists = [
  {
    title: 'Lo-fi Coding',
    url: 'https://open.spotify.com/embed/playlist/37i9dQZF1DXdbXrPNafg9d?utm_source=generator',
  },
  {
    title: 'Rock Alternativo',
    url: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX2aneNMeYHQ8?utm_source=generator',
  },
  {
    title: 'Beats para Estudiar',
    url: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX8Uebhn9wzrS?utm_source=generator',
  },
];

function SpotifyPlayer() {
  return (
    <div className="spotify-grid" id="Music">
      {playlists.map((pl, index) => (
        <motion.div
          className="spotify-card"
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <h3>{pl.title}</h3>
          <iframe
            src={pl.url}
            width="100%"
            height="200"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title={`Spotify ${pl.title}`}
            style={{ borderRadius: '12px' }}
          ></iframe>
        </motion.div>
      ))}
    </div>
  );
}

export default SpotifyPlayer;
