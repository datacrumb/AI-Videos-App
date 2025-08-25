import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Sarah Khan",
    username: "Marketing Manager",
    body: "Finally, something that saves time and money.",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "Ahmed Raza",
    username: "CEO, TechStart",
    body: "This tool cut our outreach costs in half.",
    img: "https://avatar.vercel.sh/ahmed",
  },
  {
    name: "Jessica Lee",
    username: "Sales Director",
    body: "Big impact on revenue with minimal spend.",
    img: "https://avatar.vercel.sh/jessica",
  },
  {
    name: "David Smith",
    username: "Founder, GrowthWorks",
    body: "Our ROI skyrocketed within weeks.",
    img: "https://avatar.vercel.sh/david",
  },
  {
    name: "Maria Gonzalez",
    username: "Brand Strategist",
    body: "Budget-friendly and highly effective.",
    img: "https://avatar.vercel.sh/maria",
  },
  {
    name: "Ali Hussain",
    username: "Operations Manager",
    body: "Replaced our cold calling budget overnight.",
    img: "https://avatar.vercel.sh/ali",
  },
  {
    name: "Sophia Chen",
    username: "VP Sales",
    body: "Efficient, fast, and cost-saving. Love it.",
    img: "https://avatar.vercel.sh/sophia",
  },
  {
    name: "Omar Sheikh",
    username: "Business Owner",
    body: "Every rupee spent brings value back.",
    img: "https://avatar.vercel.sh/omar",
  },
  {
    name: "Emily Brown",
    username: "Growth Consultant",
    body: "Exactly what small businesses need.",
    img: "https://avatar.vercel.sh/emily",
  },
  {
    name: "Hassan Javed",
    username: "Digital Marketing Lead",
    body: "Our ad spend dropped, conversions rose.",
    img: "https://avatar.vercel.sh/hassan",
  },
  {
    name: "Priya Mehta",
    username: "Entrepreneur",
    body: "This is smarter than any campaign I've tried.",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Michael Johnson",
    username: "CFO, BrightEdge",
    body: "Numbers don't lie—this boosts profits.",
    img: "https://avatar.vercel.sh/michael",
  },
  {
    name: "Fatima Noor",
    username: "Product Manager",
    body: "Money well spent, every single time.",
    img: "https://avatar.vercel.sh/fatima",
  },
  {
    name: "Daniel Carter",
    username: "Sales Executive",
    body: "Closed more deals without burning budget.",
    img: "https://avatar.vercel.sh/daniel",
  },
  {
    name: "Ayesha Siddiqui",
    username: "Startup Founder",
    body: "Perfect balance between cost and results.",
    img: "https://avatar.vercel.sh/ayesha",
  },
  {
    name: "John Walker",
    username: "Marketing Analyst",
    body: "Turned our limited budget into big wins.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Nadia Rehman",
    username: "Customer Success Head",
    body: "Super affordable compared to alternatives.",
    img: "https://avatar.vercel.sh/nadia",
  },
  {
    name: "Kevin Brooks",
    username: "Business Consultant",
    body: "Clients ask me how we do it so cheap.",
    img: "https://avatar.vercel.sh/kevin",
  },
  {
    name: "Zara Malik",
    username: "E-commerce Owner",
    body: "Saved money, made more sales. Simple.",
    img: "https://avatar.vercel.sh/zara",
  },
  {
    name: "Chris Evans",
    username: "Director of Sales Ops",
    body: "This changed the way we spend on outreach.",
    img: "https://avatar.vercel.sh/chris",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden backdrop-blur-4xl p-6 rounded-[14px]",
      )}
      style={{
        background: 'linear-gradient(180deg, #0F0C18 0%, #0D0A17 50%, #110828 100%)',
        border: '0.8px solid rgba(63, 50, 95, 0.3)',
        backdropFilter: 'blur(16px)'
      }}
    >
      {/* Rounded top border that matches card corners */}
      <div 
        className="absolute top-0 left-0 right-0 h-[0.8px]"
        style={{
          background: 'linear-gradient(90deg, #3F325F 0%, rgba(63, 50, 95, 0.8) 50%, rgba(63, 50, 95, 0) 100%)',
          borderRadius: '14px 14px 0 0'
        }}
      />
      
      <div className="flex flex-row items-center gap-6">
        <img className="rounded-full w-10 h-10 object-cover" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-white">
            {name}
          </figcaption>
          <p className="text-xs text-gray-300 font-medium">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm text-white leading-relaxed">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div id="customers" className="relative py-20 flex w-full flex-col items-center justify-center overflow-x-clip">
      {/* Grid SVG - Responsive and Centered */}
      <svg
        className="absolute inset-0 left-1/2 transform -translate-x-1/2 stroke-white"
        width="533"
        height="526"
        viewBox="0 0 533 526"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_1_503"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="533"
          height="526"
        >
          <line
            x1="48.4579"
            y1="0.000122098"
            x2="48.4579"
            y2="525.715"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="533"
            y1="44.8154"
            x2="-5.53006e-08"
            y2="44.8154"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="97.0228"
            y1="0.000122098"
            x2="97.0228"
            y2="525.715"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="533"
            y1="93.3799"
            x2="-5.53006e-08"
            y2="93.3798"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="145.588"
            y1="0.000122098"
            x2="145.588"
            y2="525.715"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="533"
            y1="141.945"
            x2="-5.53006e-08"
            y2="141.945"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="194.153"
            y1="0.000122098"
            x2="194.153"
            y2="525.715"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="533"
            y1="190.51"
            x2="-5.53006e-08"
            y2="190.51"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="242.718"
            y1="0.000122098"
            x2="242.718"
            y2="525.715"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="533"
            y1="239.075"
            x2="-5.53006e-08"
            y2="239.075"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="291.282"
            y1="0.000122098"
            x2="291.282"
            y2="525.715"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="533"
            y1="287.64"
            x2="-5.53006e-08"
            y2="287.64"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="339.847"
            y1="0.000122098"
            x2="339.847"
            y2="525.715"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="533"
            y1="336.205"
            x2="-5.53006e-08"
            y2="336.205"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="388.412"
            y1="0.000122098"
            x2="388.412"
            y2="525.715"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="533"
            y1="384.771"
            x2="-5.53006e-08"
            y2="384.77"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="436.977"
            y1="0.000122098"
            x2="436.977"
            y2="525.715"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="533"
            y1="433.335"
            x2="-5.53006e-08"
            y2="433.335"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="485.542"
            y1="0.000122098"
            x2="485.542"
            y2="525.715"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="533"
            y1="481.9"
            x2="-5.53006e-08"
            y2="481.9"
            stroke="white"
            strokeOpacity="0.15"
          />
        </mask>
        <g mask="url(#mask0_1_503)">
          <ellipse
            cx="266.5"
            cy="134"
            rx="465.5"
            ry="188"
            fill="url(#paint0_radial_1_503)"
          />
          <path
            d="M266.5 -53.5C394.996 -53.5 511.305 -32.4644 595.471 1.52734C637.555 18.5238 671.579 38.7499 695.073 61.1836C718.567 83.6161 731.5 108.223 731.5 134C731.5 159.777 718.567 184.384 695.073 206.816C671.579 229.25 637.555 249.476 595.471 266.473C511.305 300.464 394.996 321.5 266.5 321.5C138.004 321.5 21.6952 300.464 -62.4707 266.473C-104.555 249.476 -138.579 229.25 -162.073 206.816C-185.567 184.384 -198.5 159.777 -198.5 134C-198.5 108.223 -185.567 83.6161 -162.073 61.1836C-138.579 38.7499 -104.555 18.5238 -62.4707 1.52734C21.6952 -32.4644 138.004 -53.5 266.5 -53.5Z"
            stroke="white"
            strokeOpacity="0.15"
          />
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_1_503"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(266.5 134) rotate(90) scale(188 465.5)"
          >
            <stop stopColor="white" stopOpacity="0.8" />
            <stop offset="0.609" stopColor="#010101" />
          </radialGradient>
        </defs>
      </svg>
      
      {/* Heart SVG */}
      <svg
        className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl"
        width="656"
        height="656"
        viewBox="0 0 656 656"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <g filter="url(#filter0_i_1_500)">
          <path
            d="M440.37 82C536.645 82 601.333 173.635 601.333 259.12C601.333 432.243 332.859 574 328 574C323.141 574 54.6667 432.243 54.6667 259.12C54.6667 173.635 119.356 82 215.63 82C270.904 82 307.044 109.982 328 134.582C348.956 109.982 385.096 82 440.37 82Z"
            fill="url(#paint0_radial_1_500)"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_1_500"
            x="54.1667"
            y="81.5"
            width="547.667"
            height="493"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_1_500"
            />
          </filter>
          <radialGradient
            id="paint0_radial_1_500"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(328 328) rotate(90) scale(277 307.778)"
          >
            <stop offset="0.829" stopColor="#7050FF" stopOpacity="0.06" />
            <stop offset="1" stopColor="#7050FF" stopOpacity="0.12" />
          </radialGradient>
          <linearGradient
            id="paint1_linear_1_500"
            x1="296"
            y1="51.5"
            x2="382.794"
            y2="378.227"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9F8AFD" />
            <stop offset="0.0489996" stopColor="#7050FF" />
            <stop offset="0.249" stopColor="#3A3552" />
            <stop offset="1" stopColor="#0D0F15" />
          </linearGradient>
        </defs>
      </svg>
      <div className="relative text-center mb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white relative z-10">
          Our Customers
        </h1>

        <p className="text-gray-400 max-w-lg mx-auto relative z-10">
          What people say about us.
        </p>
        
        {/* Radial gradient background */}
        <svg
          className="absolute inset-0 left-1/2 transform -translate-x-1/2"
          width="531"
          height="249"
          viewBox="0 0 531 249"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.6" filter="url(#filter0_f_1_1433)">
            <ellipse
              cx="265.5"
              cy="124.5"
              rx="185.5"
              ry="44.5"
              fill="url(#paint0_radial_1_1433)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1_1433"
              x="0"
              y="0"
              width="531"
              height="249"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="40"
                result="effect1_foregroundBlur_1_1433"
              />
            </filter>
            <radialGradient
              id="paint0_radial_1_1433"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(265.5 124.5) rotate(90) scale(125.5 121.7)"
            >
              <stop stopColor="#9077FF" stopOpacity="0.8" />
              <stop
                offset="0.122757"
                stopColor="#6B49FF"
                stopOpacity="0.7"
              />
              <stop offset="1" stopColor="#6B49FF" stopOpacity="0.6" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <Marquee pauseOnHover className="[--duration:100s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:100s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
    </div>
  );
}
