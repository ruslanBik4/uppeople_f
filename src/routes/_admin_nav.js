export default {
  items: [
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
    {
      name: "Notification templates",
      url: "/notification-templates",
      icon: "icon-doc"
    },
    {
      name: "Links",
      url: "/links",
      icon: "icon-docs"
    },
    {
      name: "Platforms",
      url: "/platforms",
      icon: "icon-screen-tablet"
    },
    {
      name: "Activity",
      url: "/activity",
      icon: "icon-energy"
    },
    {
      name: "Analytics",
      url: "/analytics",
      icon: "icon-energy",
      children: [
        {
          name: "Funnel recruitment",
          url: "/analytics",
          icon: "icon-energy"
        },
        {
          name: "Acquisition funnel",
          url: "/acquisition",
          icon: "icon-energy"
        }
      ]
    }
  ]
};
