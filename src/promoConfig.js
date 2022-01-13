const promoConfig = {
  steps: [
    {
      index: 1,
      title: "Шаг 1",
      subtitle: "Выберите тип промо кампании",
      type: "selectOneOf",
      elements: [
        {
          id: 11,
          title: "Чековая промо кампания",
          info: "Данный тип имеет следующие преимущества...",
          price: 100000
        },
        {
          id: 12,
          title: "Sales promotion промо кампания",
          info: "Данный тип имеет следующие преимущества...",
          price: 120000
        },
        {
          id: 13,
          title: "Sales promotion промо кампания",
          info: "Данный тип имеет следующие преимущества...",
          price: 150000
        },
        {
          id: 14,
          title: "Sales promotion промо кампания",
          info: "Данный тип имеет следующие преимущества...",
          price: 200000
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
      subtitle: "Выберите дизайн промокампании",
      type: "selectOneOf",
    },
    {
      index: 4,
      title: "Шаг 4",
      subtitle: "Выберите тип регистрации",
      type: "selectOneOf",
    },
    {
      index: 5,
      title: "Шаг 5",
      subtitle: "Выберите тип авторизации",
      type: "selectOneOf",
    },
    {
      index: 6,
      title: "Шаг 6",
      subtitle: "Выберите тип авторизации",
      type: "selectOneOf",
    },
    {
      index: 7,
      title: "Шаг 7",
      subtitle: "Выберите способ внесения данных участниками",
      type: "selectOneOf",
    },
    {
      index: 8,
      title: "Шаг 8",
      subtitle: "Выберите тип розыгрыша",
      type: "selectOneOf",
    },
    {
      index: 9,
      title: "Шаг 9",
      subtitle: "Выберите способ поощрения победителей",
      type: "selectOneOf",
    },
    {
      index: 10,
      title: "Шаг 10",
      subtitle: "Демонстрационная версия готова к просмотру",
      type: "clickDemoLink",
    },
  ]
}

export default promoConfig;