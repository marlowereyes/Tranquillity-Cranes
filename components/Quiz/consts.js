import Journal from "../Icons/Journal";
import Meditate from "../Icons/Meditate";
import Walk from "../Icons/Walk";
import Nature from "../Icons/Nature";
import Yoga from "../Icons/Yoga";
import Water from "../Icons/Water";
import Workout from "../Icons/Workout";
import LovedOnes from "../Icons/LovedOnes";

export const RESULT_MAP = {
    "000": {
      name: "Result A",
      actionName: "Take a Walk & Drink Water",
      actions: [
        {
          name: "Take a Walk",
          IconComponent: Walk,
        },
        {
          name: "Drink Water",
          IconComponent: Water,
        }
      ]
      
    },
    "001": {
      name: "Result B",
      actionName: "Take a Walk & Workout",
      actions: [
        {
          name: "Take a Walk",
          IconComponent: Walk,
        },
        {
          name: "Workout",
          IconComponent: Workout,
        }
      ]
      
    },
    "010":{
      name: "Result C",
      actionName: "Observe Nature & Meditate",
      actions: [
        {
          name: "Observe Nature",
          IconComponent: Nature,
        },
        {
          name: "Meditate",
          IconComponent: Meditate,
        }
      ]
      
    },
    "011": {
      name: "Result D",
      actionName: "Observe Nature & Spend time with Loved Ones",
      actions: [
        {
          name: "Observe Nature",
          IconComponent: Nature,
        },
        {
          name: "Spend time with Loved Ones",
          IconComponent: LovedOnes,
        }
      ]
      
    },
    "100": {
      name: "Result E",
      actionName: "Yoga & Drink Water",
      actions: [
        {
          name: "Yoga",
          IconComponent: Yoga,
        },
        {
          name: "Drink Water",
          IconComponent: Water,
        }
      ]
      
    },
    "101": {
      name: "Result F",
      actionName: "Yoga & Workout",
      actions: [
        {
          name: "Yoga",
          IconComponent: Yoga,
        },
        {
          name: "Workout",
          IconComponent: Workout,
        }
      ]
      
    },
    "110": {
      name: "Result G",
      actionName: "Journal & Meditate",
      actions: [
        {
          name: "Journal",
          IconComponent: Meditate,
        },
        {
          name: "Meditate",
          IconComponent: Journal,
        }
      ]
      
    },
    "111": {
      name: "Result H",
      actionName: "Journal & Spend time with Loved Ones",
      actions: [
        {
          name: "Journal",
          IconComponent: Meditate,
        },
        {
          name: "Spend time with Loved Ones",
          IconComponent: LovedOnes,
        }
      ]
      
    }
  };

  export const QUESTIONS = [
    {
      question: "How is your heart?",
      answers: ["Content", "Depressed", "Frustrated"]
    },
    {
      question: "What environment do you prefer to be in?",
      answers: ["Outdoor", "Indoor"]
    },
    {
      question: "What type of activities do you prefer?",
      answers: ["High Impact", "Low Impact"]
    },
    {
      question: "Are you introverted or extroverted?",
      answers: ["Introverted", "Extroverted"]
    }
  ];