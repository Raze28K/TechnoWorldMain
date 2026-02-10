export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          "dark-gray": "#222222",
        },
        keyframes: {
          fall: {
            "0%": { transform: "translateY(-50px) rotate(0deg)", opacity: "0" },
            "50%": { opacity: "0.7" },
            "100%": { transform: "translateY(120vh) rotate(360deg)", opacity: "0.7" },
          },
        gradientFlow: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        animation: {
          fall20: "fall 20s linear infinite",
          fall22: "fall 22s linear infinite",
          fall25: "fall 25s linear infinite",
          gradientFlow: "gradientFlow 5s linear infinite",
        },
      },
    },
},
