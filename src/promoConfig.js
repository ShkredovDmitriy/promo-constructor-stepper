const promoConfig = {
  steps: [
    {
      index: 1,
      title: "Шаг 1",
      subtitle: "Выберите тип промокампании",
      type: "selectOneOf",
      elements: [
        {
          id: 11,
          title: "Тип 1",
          info: "Данный тип имеет следующие преимущества...",
          price: 10000
        },
        {
          id: 12,
          title: "Тип 2",
          info: "Данный тип имеет следующие преимущества...",
          price: 15000
        },
        {
          id: 13,
          title: "Тип 3",
          info: "Данный тип имеет следующие преимущества...",
          price: 20000
        },
        {
          id: 14,
          title: "Тип 4",
          info: "Данный тип имеет следующие преимущества...",
          price: 25000
        }
      ]
    },
    {
      index: 2,
      title: "Шаг 2",
      subtitle: "Выберите сроки проведения промокампании",
      type: "selectDate"
    },
    {
      index: 3,
      title: "Шаг 3",
      subtitle: "Выберите дизайн промокампании"
    },
    {
      index: 4,
      title: "Шаг 4",
      subtitle: "Выберите тип регистрации"
    },
    {
      index: 5,
      title: "Шаг 5",
      subtitle: "Выберите тип авторизации"
    },
    {
      index: 6,
      title: "Шаг 6",
      subtitle: "Выберите тип авторизации"
    },
    {
      index: 7,
      title: "Шаг 7",
      subtitle: "Выберите способ внесения данных участниками"
    },
    {
      index: 8,
      title: "Шаг 8",
      subtitle: "Выберите тип розыгрыша"
    },
    {
      index: 9,
      title: "Шаг 9",
      subtitle: "Выберите способ поощрения победителей"
    },
  ]
}

export default promoConfig;