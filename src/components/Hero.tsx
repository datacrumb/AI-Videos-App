import { Button } from "@/components/ui/button"

export default function HeroSection() {
    return (
        <section className="py-12 pt-10 text-center relative z-20">
            <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl relative z-20">
                Your New Fastest
                <br />
                {/* [#a638d3] */}
                Route to <span className="text-blue-500">Revenue</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm text-gray-300 sm:text-base relative z-20">
                Send 30-second AI avatar videos that greet prospects by name, mention 
                <br />
                their business, and pitch your offer — for just Rs 20 per video.
            </p>
            <div className="mt-8 flex justify-center gap-4 relative z-20">
                <Button className="text-white px-4 py-2 bg-blue-500/25 rounded-lg shadow-[inset_0_0_10px_0_#0099FF]">Try it now</Button>
                <Button variant="outline" className="border-[0.8px] border-gray-700 [border-image-slice:1] [background:linear-gradient(249.49deg,#1F1F1F_8.6%,#191919_19.56%,#0F0F0F_44.25%)] text-white hover:text-white px-4 py-2 rounded-lg">
                    Book your demo
                </Button>
            </div>
        </section>
    )
}
