"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, Plus } from "lucide-react"
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface LayerItem {
  id: string
  name: string
  selected: boolean
  type: "scene" | "rectangle" | "structure" | "image"
}

export default function AnimationEditor() {
  const [layers, setLayers] = useState<LayerItem[]>([
    { id: "1", name: "Scene", selected: true, type: "scene" },
    { id: "2", name: "Rectangle", selected: false, type: "rectangle" },
    { id: "3", name: "Layer structure", selected: false, type: "structure" },
    { id: "4", name: "Image", selected: false, type: "image" },
  ])

  const [position, setPosition] = useState({
    x: 187,
    y: 208,
    width: 480,
    height: 315,
    angle: 0,
    radius: 0,
  })

  const [opacity, setOpacity] = useState(100)
  const [fillOpacity, setFillOpacity] = useState(100)

  // Simple video state
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isVideoReady, setIsVideoReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Fallback timer to ensure video is ready quickly
  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current && !isVideoReady) {
        if (videoRef.current.duration > 0) {
          setDuration(videoRef.current.duration)
          setIsVideoReady(true)
        }
      }
    }, 500) // 500ms fallback

    return () => clearTimeout(timer)
  }, [isVideoReady])

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
      // Set duration as soon as we have any time data
      if (videoRef.current.duration && videoRef.current.duration > 0) {
        setDuration(videoRef.current.duration)
        setIsVideoReady(true)
      }
    }
  }

  const handleCanPlay = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
      setIsVideoReady(true)
    }
  }

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const handleSliderChange = (values: number[]) => {
    if (videoRef.current && duration > 0) {
      const newTime = (values[0] / 100) * duration
      videoRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="mb-8 mt-4 gap-4 flex justify-center items-center px-2">
      <div
        className="relative flex flex-col rounded-xl z-10 bg-gray-900 md:min-h-[600px] md:min-w-[600px] max-h-[700px] max-w-[1000px] 
      border-t 
      border-[1px] 
      [border-image-source:linear-gradient(90deg,#192235_0%,#0059FF_40%,#6FADFF_50%,#0059FF_60%,#192235_100%)] 
        [border-image-slice:1]"
      >
        <div className="flex-1 bg-[#0a1428] p-4 md:min-h-[600px] md:min-w-[600px] max-h-[700px] max-w-[1000px]">
          <div className="relative h-full w-full group">
            {/* Center Video */}
            <video
              ref={videoRef}
              className="h-full w-full object-cover rounded-lg md:min-h-[600px] md:min-w-[600px] max-h-[700px] max-w-[1000px]"
              poster="/Images/video-thumbnail.PNG"
              autoPlay
              playsInline
              controls={false}
              onTimeUpdate={handleTimeUpdate}
              onCanPlay={handleCanPlay}
              onPlay={handlePlay}
              onPause={handlePause}
            >
              <source src="/videos/MamaZara.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={handlePlayPause}
                disabled={!videoRef.current || !videoRef.current.readyState}
                className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 lg:p-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 ease-out transition-all duration-200 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed items-center justify-center"
              >
                {videoRef.current?.paused ? (
                  <FaPlay className="lg:h-8 lg:w-8 w-4 h-4" />
                ) : (
                  <FaPause className="lg:h-8 lg:w-8 w-4 h-4" />
                )}
              </button>
            </div>

            {/* Video Controls Overlay - Bottom */}
            <div className="absolute bottom-2 lg:bottom-5 left-4 right-4 transform translate-y-0 opacity-100 lg:translate-y-full lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-300 ease-out">
              <div className="space-y-3">
                {/* Video Progress */}
                <div className="relative">
                  <Slider
                    value={[duration > 0 ? (currentTime / duration) * 100 : 0]}
                    onValueChange={handleSliderChange}
                    max={100}
                    step={1}
                    className="flex-1"
                  />
                </div>

                {/* Time Display */}
                <div className="flex items-center justify-between text-xs text-gray-200">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
