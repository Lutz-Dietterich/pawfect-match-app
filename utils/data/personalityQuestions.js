export const personalityQuestionsData = [
  {
    id: 1,
    question: "How big can your dog be?",
    description:
      "A dog's size is important when deciding if it will fit your lifestyle and housing situation, as well as planning its diet, exercise and care requirements.",
    startValue: [35, 55],
    filter: (breed, value) =>
      breed.min_height_male * 2.54 >= value[0] &&
      breed.max_height_male * 2.54 <= value[1],
  },
  {
    id: 2,
    question: "How much exercise can you provide?",
    description:
      "Exercise is important for a dog's physical and mental health. Some breeds require more exercise than others.",
    startValue: [50],
    filter: "energy",
    factor: 2,
    operator: ">=",
  },
  {
    id: 3,
    question: "Do you have children?",
    description:
      "Some breeds are better with children than others. It's important to choose a breed that will get along well with your family.",
    startValue: [50],
    filter: "good_with_children",
    factor: 0,
    operator: "<=",
  },
  {
    id: 4,
    question: "How much grooming are you willing to do?",
    description:
      "Some breeds require more grooming than others. If you don't have a lot of time or money to spend on grooming, you may want to choose a low-maintenance breed.",
    startValue: [50],
    filter: "grooming",
    factor: 0,
    operator: ">=",
  },
  {
    id: 5,
    question: "How much barking can you tolerate?",
    description:
      "Some breeds are more prone to barking than others. If you live in an apartment or have close neighbors, you may want to choose a breed that is not as vocal.",
    startValue: [50],
    filter: "barking",
    factor: 2,
    operator: ">=",
  },
  {
    id: 6,
    question: "How much time can you spend training your dog?",
    description:
      "Training is important for a dog's behavior and obedience. Some breeds are easier to train than others.",
    startValue: [50],
    filter: "trainability",
    factor: 2,
    operator: ">=",
  },
  {
    id: 7,
    question: "Do you have other pets?",
    description:
      "Some breeds get along well with other animals, while others may have a higher prey drive and may not be a good fit for a home with other pets.",
    startValue: [50],
    filter: "good_with_other_dogs",
    factor: 0,
    operator: "<=",
  },
  {
    id: 8,
    question: "How much shedding can you tolerate?",
    description:
      "Some breeds shed more than others. If you don't want to deal with a lot of hair in your home, you may want to choose a breed that is known for being low-shedding.",
    startValue: [50],
    filter: "shedding",
    factor: 1,
    operator: ">=",
  },
  {
    id: 9,
    question: "How much time can you spend with your dog each day?",
    description:
      "Dogs are social animals and require human interaction. Some breeds may be more independent and require less attention, while others may be more prone to separation anxiety.",
    startValue: [50],
    filter: "trainability",
    factor: 2,
    operator: ">=",
  },
];
