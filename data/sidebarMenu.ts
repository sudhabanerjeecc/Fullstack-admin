import { Grid2X2, Cuboid, ShoppingBasket, UsersRound, Inbox, MessageSquareMore, FileText, Info, ListTodo, Handshake } from "lucide-react"

export const sidebarMenu = {
  "sections": [
    {
      "title": "Application",
      "items": [
        {
          "title": "Dashboard",
          "icon": Grid2X2,
          "href": "/dashboard"
        },
        {
          "title": "Catalog",
          "icon": Cuboid,
          "children": [
            { "title": "Products List", "href": "/products" },
            { "title": "Product", "href": "/product" },
            { "title": "Categories List", "href": "/categories" },
            { "title": "Category", "href": "/category" }
          ]
        },
        {
          "title": "Customers",
          "icon": UsersRound,
          "children": [
            { "title": "Customers List", "href": "/customers" },
            { "title": "Customer", "href": "/customer" }
          ]
        },
        {
          "title": "Orders",
          "icon": ShoppingBasket,
          "children": [
            { "title": "Orders List", "href": "/orders" },
            { "title": "Order Details", "href": "/order" }
          ]
        },
        {
          "title": "Inbox",
          "icon": Inbox,
          "children": [
            { "title": "List", "href": "/inbox" },
            { "title": "Conversation", "href": "/inbox/conversation" }
          ]
        },
        {
          "title": "Chat",
          "icon": MessageSquareMore,
          "badge": 8,
          "href": "/chat"
        },
      ]
    },
    {
      "title": "Pages",
      "items": [
        { "title": "Invoice", "icon": FileText, "href": "/invoice" },
        { "title": "FAQ", "icon": Info, "href": "/faq" },
        { "title": "Terms And Conditions", "icon": ListTodo, "href": "/terms" },
        { "title": "Help Center", "icon": Handshake, "href": "/help" },
      ]
    }
  ]
}
