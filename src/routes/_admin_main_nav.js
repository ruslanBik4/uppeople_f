export default {
  items: [
    {
      name: "Users",
      url: "/users",
      icon: "icon-people"
    },
    {
      name: "Candidates",
      url: "/candidates",
      icon: "icon-people"
    },
    {
      name: "Companies",
      url: "/companies",
      icon: "icon-location-pin"
    },
    {
      name: "Vacancies",
      url: "/vacancies",
      icon: "icon-briefcase"
    },
    {
      name: "Email",
      url: "/email",
      icon: "icon-envelope",
      children: [
        {
          name: "Inbox",
          url: "/email/inbox",
          icon: "icon-speech"
        },
        // {
        //   name: "Message",
        //   url: "/email/message/:id",
        //   icon: "icon-speech"
        // },
        {
          name: "New message",
          url: "/email/compose",
          icon: "icon-speech"
        }
      ]
    },
    {
      name: "Calendar",
      url: "/calendar",
      icon: "icon-calendar"
    },
    // {
    //   name: "Analitics",
    //   url: "/analytics",
    //   icon: "icon-energy"
    // },
    {
      name: "Analytics",
      url: "/analytics",
      icon: "icon-energy",
      children: [
        {
          name: "Recruitment funnel",
          url: "/analytics",
          icon: "icon-energy"
        },
        {
          name: "Acquisition funnel",
          url: "/acquisition",
          icon: "icon-energy"
        }
      ]
    },
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer",
      children: [
        {
          name: "Table",
          url: "/dashboard",
          icon: "icon-speedometer",
        },
        {
          name: "Canban",
          url: "/canban",
          icon: "icon-speedometer",
        }
      ]
    },
    // {
    //   name: "Charts",
    //   url: "/charts",
    //   icon: "icon-pie-chart"
    // }
  ]
};
