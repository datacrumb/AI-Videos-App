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
    <div className="mb-8 mt-4 grid md:grid-cols-[220px_1fr_220px] gap-4">
      {/* Left Panel - Layers */}
      <div className="rounded-lg bg-gray-900 z-10 p-3">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-xs font-medium text-gray-400">Layers</h3>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">Items</span>
          </div>
        </div>

        <div className="mt-4">
          {layers.map((layer) => (
            <div
              key={layer.id}
              className={`mb-1 flex cursor-pointer items-center rounded p-2 ${
                layer.selected ? "bg-blue-900/30" : "hover:bg-gray-800"
              }`}
              onClick={() => {
                setLayers(
                  layers.map((l) => ({
                    ...l,
                    selected: l.id === layer.id,
                  })),
                )
              }}
            >
              <div className="mr-2 flex h-4 w-4 items-center justify-center">
                {layer.type === "scene" && <div className="h-3 w-3 rounded-sm bg-blue-500"></div>}
                {layer.type === "rectangle" && <div className="h-3 w-3 rounded-sm border border-white"></div>}
                {layer.type === "structure" && (
                  <div className="h-3 w-3 rounded-sm border-b border-l border-white"></div>
                )}
                {layer.type === "image" && <div className="h-3 w-3 rounded-sm bg-gray-400"></div>}
              </div>
              <span className="text-xs text-white">{layer.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Center Panel - Preview */}
      <div
        className="relative flex flex-col rounded-xl z-10 bg-gray-900 
        border-t 
        border-[1px] 
        [border-image-source:linear-gradient(90deg,#192235_0%,#0059FF_40%,#6FADFF_50%,#0059FF_60%,#192235_100%)] 
        [border-image-slice:1]"
      >
        <div className="flex-1 bg-[#0a1428] p-4">
          <div className="relative h-full w-full group">
            {/* Center Video */}
            <video 
              ref={videoRef}
              className="h-full w-full object-cover rounded-lg"
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
                className="bg-black/50 hover:bg-black/70 text-white rounded-full p-3 opacity-0 group-hover:opacity-100 ease-out transition-all duration-200 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed items-center justify-center"
              >
                {videoRef.current?.paused ? (
                  <FaPlay className="h-8 w-8" />
                ) : (
                  <FaPause className="h-8 w-8" />
                )}
              </button>
            </div>

            {/* Video Controls Overlay - Bottom */}
            <div className="absolute bottom-5 left-4 right-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
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
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Properties */}
      <div className="rounded-lg bg-gray-900 z-10 p-3">
        <Tabs defaultValue="design">
          <TabsList className="grid w-full grid-cols-2 bg-gray-800">
            <TabsTrigger value="design" className="text-xs">
              Design
            </TabsTrigger>
            <TabsTrigger value="animate" className="text-xs">
              Animate
            </TabsTrigger>
          </TabsList>
          <TabsContent value="design" className="mt-4 space-y-4">
            {/* Position Controls */}
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <label className="text-xs text-gray-400">X</label>
                <div className="flex h-7 items-center rounded bg-gray-800 px-2">
                  <input
                    type="number"
                    value={position.x}
                    onChange={(e) => setPosition({ ...position, x: Number.parseInt(e.target.value) || 0 })}
                    className="w-full bg-transparent text-xs text-white outline-none"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-400">Y</label>
                <div className="flex h-7 items-center rounded bg-gray-800 px-2">
                  <input
                    type="number"
                    value={position.y}
                    onChange={(e) => setPosition({ ...position, y: Number.parseInt(e.target.value) || 0 })}
                    className="w-full bg-transparent text-xs text-white outline-none"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-400">Width</label>
                <div className="flex h-7 items-center rounded bg-gray-800 px-2">
                  <input
                    type="number"
                    value={position.width}
                    onChange={(e) => setPosition({ ...position, width: Number.parseInt(e.target.value) || 0 })}
                    className="w-full bg-transparent text-xs text-white outline-none"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-400">Height</label>
                <div className="flex h-7 items-center rounded bg-gray-800 px-2">
                  <input
                    type="number"
                    value={position.height}
                    onChange={(e) => setPosition({ ...position, height: Number.parseInt(e.target.value) || 0 })}
                    className="w-full bg-transparent text-xs text-white outline-none"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-400">Angle</label>
                <div className="flex h-7 items-center rounded bg-gray-800 px-2">
                  <input
                    type="number"
                    value={position.angle}
                    onChange={(e) => setPosition({ ...position, angle: Number.parseInt(e.target.value) || 0 })}
                    className="w-full bg-transparent text-xs text-white outline-none"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-400">Radius</label>
                <div className="flex h-7 items-center rounded bg-gray-800 px-2">
                  <input
                    type="number"
                    value={position.radius}
                    onChange={(e) => setPosition({ ...position, radius: Number.parseInt(e.target.value) || 0 })}
                    className="w-full bg-transparent text-xs text-white outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Opacity Control */}
            <div className="space-y-2">
              <label className="text-xs text-gray-400">Opacity</label>
              <div className="flex items-center gap-2">
                <Slider
                  value={[opacity]}
                  onValueChange={(values: any) => setOpacity(values[0])}
                  max={100}
                  step={1}
                  className="flex-1"
                />
                <span className="w-8 text-right text-xs text-white">{opacity}%</span>
              </div>
            </div>

            {/* Fill Control */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs text-gray-400">Fill</label>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded bg-blue-500"></div>
                <span className="text-xs text-gray-400">Primary</span>
                <div className="flex-1"></div>
                <div className="flex items-center gap-2">
                  <Slider
                    value={[fillOpacity]}
                    onValueChange={(values: any) => setFillOpacity(values[0])}
                    max={100}
                    step={1}
                    className="w-16"
                  />
                  <span className="w-8 text-right text-xs text-white">{fillOpacity}%</span>
                </div>
              </div>
            </div>

            {/* Stroke Control */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs text-gray-400">Stroke</label>
                <Plus className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Shadow Control */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs text-gray-400">Shadow</label>
                <Plus className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Blur Control */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs text-gray-400">Blur</label>
                <Plus className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="animate">
            <div className="mt-4 text-center text-xs text-gray-400">Animation controls</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
