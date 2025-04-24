const contentData = {
    gallery: [
        { src: "images/image1.jpg", description: "Core workout" },
        { src: "images/image2.jpeg", description: "Dumbbell Space" },
        { src: "images/image3.jpg", description: "Group training" },
        { src: "images/image4.jpeg", description: "Personal Training" },
        { src: "images/image5.jpg", description: "Plank Partner" },
        { src: "images/image6.webp", description: "Boxing Partner" },
        { src: "images/image7.png", description: "Bench Spotting" },
        { src: "images/image8.jpg", description: "Kettlebell Training" }
    ],
    pricingPlans: [
        {
            name: "Basic Plan",
            price: "$15/Month",
            features: [
                "Limited Access",
                "Foundational Fitness Assessment",
                "Orientation & Basic Instruction",
                "Access to Select Group Classes",
                "Locker Room & Shower Access"
            ]
        },
        {
            name: "Performance Plus",
            price: "$40/Month",
            features: [
                "Unlimited Access",
                "Comprehensive Fitness Assessment",
                "Variety of Group Fitness Classes",
                "Personal Training Session",
                "Guest Privileges"
            ]
        },
        {
            name: "Elite Fitness",
            price: "$85/Month",
            features: [
                "All-Access & Exclusive Areas",
                "Unlimited Personal Training",
                "Specialty Classes & Workshops",
                "Advanced Fitness Tracking & Technology",
                "Nutrition Counseling & Support"
            ]
        }
    ],
    planComparison: [
        { feature: "Unlimited Gym Access", basic: "No", performance: "Yes", elite: "Yes" },
        { feature: "Personal Training", basic: "No", performance: "Limited to 2 per week", elite: "Unlimited" },
        { feature: "Group Fitness Classes", basic: "Limited", performance: "Wide Variety", elite: "All + Specialty" },
        { feature: "Pool/Sauna Access", basic: "No", performance: "Yes", elite: "Yes" },
        { feature: "Guest Privileges", basic: "No", performance: "Limited", elite: "Unlimited" },
        { feature: "Nutrition Counseling", basic: "No", performance: "No", elite: "Yes" }
    ]
};
