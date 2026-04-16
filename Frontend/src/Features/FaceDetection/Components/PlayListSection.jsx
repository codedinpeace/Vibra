import React, { useContext } from 'react'
import { SongContext } from '../context/SongContext'

const PlayListSection = () => {
  const { playListId, gettingSongs } = useContext(SongContext)

  if (gettingSongs || !playListId) return null

  return (
    <div className="w-full max-w-5xl mx-auto ">
      {/* <p className="text-sm text-gray-400 mb-1">Recommended based on your mood</p>
      <h2 className="text-2xl font-medium text-gray-800 mb-6">For Your Current State</h2> */}

      <div className="flex gap-6 items-start">

        {/* Spotify Embed */}
        <div className="flex-1 rounded-2xl  border border-gray-100 shadow-sm">
          <iframe
            src={`https://open.spotify.com/embed/playlist/${playListId}?utm_source=generator&theme=0`}
            width="200%"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className='h-screen'
            loading="lazy"
          />
        </div>

        {/* Mood Analysis Sidebar */}
        {/* <div
          className="w-60 flex-shrink-0 rounded-2xl p-5 border border-violet-200"
          style={{ background: '#F5F3FF' }}
        >
          <p className="text-base font-medium mb-5" style={{ color: '#3C3489' }}>
            Mood Analysis
          </p>

          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1.5">
              <span className="text-gray-500">Joy</span>
              <span className="font-medium text-gray-700">74%</span>
            </div>
            <div className="h-2 rounded-full" style={{ background: '#DDD6FE' }}>
              <div className="h-full rounded-full" style={{ width: '74%', background: '#6D5BF7' }} />
            </div>
          </div>

          <div className="mb-5">
            <div className="flex justify-between text-sm mb-1.5">
              <span className="text-gray-500">Energy</span>
              <span className="font-medium text-gray-700">42%</span>
            </div>
            <div className="h-2 rounded-full" style={{ background: '#DDD6FE' }}>
              <div className="h-full rounded-full" style={{ width: '42%', background: '#A78BFA' }} />
            </div>
          </div>

          <p className="text-xs italic leading-relaxed" style={{ color: '#534AB7' }}>
            "Your music choice today suggests a reflective yet optimistic afternoon."
          </p>
        </div> */}

      </div>
    </div>
  )
}

export default PlayListSection