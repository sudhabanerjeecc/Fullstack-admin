export const sidebarMenu = {
  "sections": [
    {
      "title": "Application",
      "items": [
        {
          "title": "Dashboard",
          "icon": "dashboard",
          "href": "/dashboard"
        },
        {
          "title": "Catalog",
          "icon": "catalog",
          "children": [
            { "title": "Products List", "href": "/products" },
            { "title": "Product", "href": "/product" },
            { "title": "Categories List", "href": "/categories" },
            { "title": "Category", "href": "/category" }
          ]
        },
        {
          "title": "Customers",
          "icon": "customers",
          "children": [
            { "title": "Customers List", "href": "/customers" },
            { "title": "Customer", "href": "/customer" }
          ]
        },
        {
          "title": "Orders",
          "icon": "orders",
          "children": [
            { "title": "Orders List", "href": "/orders" },
            { "title": "Order Details", "href": "/order" }
          ]
        },
        {
          "title": "Inbox",
          "icon": "envelope",
          "children": [
            { "title": "List", "href": "/inbox" },
            { "title": "Conversation", "href": "/inbox/conversation" }
          ]
        },
        {
          "title": "Chat",
          "icon": "chat",
          "badge": 8,
          "href": "/chat"
        },
      ]
    },
    {
      "title": "Pages",
      "items": [
        { "title": "Invoice", "icon": "file", "href": "/invoice" },
        { "title": "FAQ", "icon": "info", "href": "/faq" },
        { "title": "Terms And Conditions", "icon": "check", "href": "/terms" },
        { "title": "Help Center", "icon": "help", "href": "/help" },
      ]
    }
  ]
}
