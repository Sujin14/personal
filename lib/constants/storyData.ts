export interface Chapter {
    id: number;
    title: string;
    narration: string;
    image: string;
    colorTheme: {
        primary: string;
        secondary: string;
        accent: string;
    };
    specialAnimation?: 'heartUnlock' | 'eyeContact' | 'tears' | 'autograph' | 'notification' | 'proposal';
    soundEffect?: string;
}

export const CHAPTERS: Chapter[] = [
    {
        id: 1,
        title: "The Birth of a Cupid",
        narration: "On February 14, 2002, a cupid was born... but his heart remained locked, waiting for the one who held the key.",
        image: "/images/chapters/baby.jpeg",
        colorTheme: { primary: "baby-blue", secondary: "light-yellow", accent: "rose-soft" }
    },
    {
        id: 2,
        title: "The Search",
        narration: "Ten years passed... He searched among familiar faces, but the key to his heart remained hidden.",
        image: "/images/chapters/10yearold.jpeg",
        colorTheme: { primary: "baby-blue", secondary: "light-yellow", accent: "rose-soft" }
    },
    {
        id: 3,
        title: "The Arrival",
        narration: "And then one day in 5th standard, the classroom door opened... A new student walked in. In that moment, the cupid felt something he'd never felt before—the key appeared, glowing softly in her presence.",
        image: "/images/chapters/childyamuna.jpeg",
        colorTheme: { primary: "sky-blue", secondary: "sunny-yellow", accent: "gold-sparkle" }
    },
    {
        id: 4,
        title: "The Heartbeat",
        narration: "She sat right in front of him. His heart raced. A rush of happiness he couldn't explain. The key was there, but it wasn't time to unlock the heart yet.",
        image: "/images/chapters/friendship.jpeg",
        colorTheme: { primary: "sky-blue", secondary: "sunny-yellow", accent: "rose-soft" },
        soundEffect: "/audio/heartbeat.mp3"
    },
    {
        id: 5,
        title: "Friendship Blooms",
        narration: "Days turned into weeks. They became friends. His friend Ajay noticed and teased him, but only close friends knew his secret. Each day, he reached deeper into his heart, slowly turning the key...",
        image: "/images/chapters/friendship.jpeg",
        colorTheme: { primary: "sky-blue", secondary: "sunny-yellow", accent: "rose-soft" }
    },
    {
        id: 6,
        title: "The Heart Unlocks",
        narration: "After months of friendship, the lock finally opened. Inside his heart, he found her—his soulmate. By then, almost everyone in class knew... except her.",
        image: "/images/chapters/heart.jpeg",
        colorTheme: { primary: "rose-deep", secondary: "gold-sparkle", accent: "rose-soft" },
        specialAnimation: "heartUnlock",
        soundEffect: "/audio/heart-unlock.mp3"
    },
    {
        id: 7,
        title: "The Revelation & Retreat",
        narration: "6th standard arrived. After a fight with a friend, Devu went to Yamuna and told her everything. She looked at him. World War III erupted in his mind—would she tell the teachers? His parents? But she did nothing. Yet fear consumed him. From that day, he ran away whenever he saw her. The heart, though unlocked, remained hidden.",
        image: "/images/chapters/childyamuna.jpeg",
        colorTheme: { primary: "dusty-blue", secondary: "gray-lavender", accent: "charcoal" },
        specialAnimation: "eyeContact"
    },
    {
        id: 8,
        title: "The Silent Years & The Tear",
        narration: "Years passed in silence. By 10th standard, during Sanskrit class, loneliness overwhelmed him. Tears filled his eyes. The teacher noticed, but he said nothing. The truth was—he thought he'd failed. That she didn't even consider him a friend. After class, she came to him, asking why he cried. After nearly 3 years of silence, she spoke to him. For a moment, happiness returned... but it was short-lived.",
        image: "/images/chapters/childyamuna.jpeg",
        colorTheme: { primary: "dusty-blue", secondary: "gray-lavender", accent: "sky-blue" },
        specialAnimation: "tears"
    },
    {
        id: 9,
        title: "The Autograph & Separation",
        narration: "As 10th standard ended, they exchanged autograph books. Her words are treasured to this day. Then they separated—different schools, different paths. He chose computer science. She chose nursing. He closed his heart again, but this time, she and all her memories were locked inside.",
        image: "/images/chapters/ch9-autograph.jpg",
        colorTheme: { primary: "gray-lavender", secondary: "dusty-blue", accent: "rose-soft" },
        specialAnimation: "autograph"
    },
    {
        id: 10,
        title: "The Lost Years",
        narration: "He lost all his friends. Computer science made him an extreme introvert. His comfort zone was gone. Cars and bikes became his love. He closed his heart completely, convinced love wasn't for him. For two years, he didn't think of relationships. When someone mentioned love, he thought of engines and wheels.",
        image: "/images/chapters/bikes.jpeg",
        colorTheme: { primary: "charcoal", secondary: "steel-gray", accent: "dusty-blue" }
    },
    {
        id: 11,
        title: "The Message",
        narration: "Then, a WhatsApp message arrived on his mother's phone. It was her. But he wasn't ready. His heart loved cars, not people. Still, they started talking occasionally. And slowly, he realized—the love never left. It was always there, locked inside.",
        image: "/images/chapters/chatting.jpeg",
        colorTheme: { primary: "coral", secondary: "soft-orange", accent: "rose-soft" },
        specialAnimation: "notification",
        soundEffect: "/audio/notification.mp3"
    },
    {
        id: 12,
        title: "The Instagram Era & Realization",
        narration: "During his 2nd year of B.Tech, he found her on Instagram. They texted. Barriers fell. He could talk to her without fear. He told her about his love—multiple times. She mentioned age, caste, family concerns. But he knew one truth: He wasn't 'loving' her. If it were just love, he could love someone else. But for him, she IS love. If she goes, love itself goes with her.",
        image: "/images/chapters/chatting.jpeg",
        colorTheme: { primary: "coral", secondary: "soft-orange", accent: "rose-deep" }
    },
    {
        id: 13,
        title: "The Transformation",
        narration: "Years passed. He transformed—from an obese child to a fit man, from a student to a mobile application developer with a good job. She became an assistant professor in nursing. But one thing never changed: the love in his heart. 13 years. Through silence and distance, through fear and hope—she remained.",
        image: "/images/chapters/friendship.jpeg",
        colorTheme: { primary: "rose-deep", secondary: "lavender", accent: "gold-sparkle" }
    },
    {
        id: 14,
        title: "Will You Be My Valentine?",
        narration: `Thirteen years ago, a cupid's heart found its key.
Through childhood smiles and teenage fears,
Through silent years and distant tears,
Through every moment, far or near,
You've been the only one, crystal clear.

I've told you before, I'll say again—
This isn't just love that comes and goes.
You ARE the love my heart knows.
If you leave, love itself departs from me.

I know the concerns that fill your mind,
Age, caste, family—the world's design.
But I'm not asking you to decide today,
I'm just asking you to hear what I say:

I will wait.
Whether it takes a day, a year, or forever,
My heart has already made its choice.
If I have a love life, it's with you,
Or I walk alone, a path of no love anew.

People say in our final seven minutes,
We see life's most beautiful moments.
After my parents, I want to see you there,
The love that made everything worthwhile, so fair.

Today is February 14, 2026—
Valentine's Day, and the day I turn 24.
So here's my question, from a heart that's yours:

Will you be my Valentine?
Not just for this day,
But till the last breath of mine.`,
        image: "/images/chapters/heart.jpeg",
        colorTheme: { primary: "rose-deep", secondary: "lavender", accent: "gold-sparkle" },
        specialAnimation: "proposal",
        soundEffect: "/audio/ambient-romantic.mp3"
    }
];
