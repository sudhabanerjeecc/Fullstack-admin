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
          "title": "Marketing",
          "icon": "marketing",
          "children": [
            { "title": "Coupons List", "href": "/coupons" },
            { "title": "Coupon", "href": "/coupon" }
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
        {
          "title": "File Manager",
          "icon": "file",
          "href": "/files"
        },
        {
          "title": "Calendar",
          "icon": "calendar",
          "href": "/calendar"
        },
        {
          "title": "Analytics",
          "icon": "analytics",
          "href": "/analytics"
        },
        {
          "title": "Settings",
          "icon": "settings",
          "children": [
            { "title": "Table of Content", "href": "/settings/toc" },
            { "title": "Form", "href": "/settings/form" }
          ]
        }
      ]
    },
    {
      "title": "Pages",
      "items": [
        {
          "title": "Authentication",
          "icon": "lock",
          "children": [
            { "title": "Sign In", "href": "/auth/login" },
            { "title": "Sign Up", "href": "/auth/register" },
            { "title": "Forgot Password", "href": "/auth/forgot-password" },
            { "title": "Reset Password", "href": "/auth/reset-password" },
            { "title": "Verify Account", "href": "/auth/verify" }
          ]
        },
        { "title": "Invoice", "icon": "file", "href": "/invoice" },
        { "title": "Pricing Table", "icon": "dollar", "href": "/pricing" },
        { "title": "FAQ", "icon": "info", "href": "/faq" },
        { "title": "Terms And Conditions", "icon": "check", "href": "/terms" },
        { "title": "Help Center", "icon": "help", "href": "/help" },
        { "title": "Not Found", "icon": "404", "href": "/404" }
      ]
    },
    {
      "title": "Framework",
      "items": [
        {
          "title": "Components",
          "icon": "components",
          "children": [
            { "title": "Accordion", "href": "/components/accordion" },
            { "title": "Alerts", "href": "/components/alerts" },
            { "title": "Buttons", "href": "/components/buttons" },
            { "title": "Cards", "href": "/components/cards" },
            { "title": "Modal", "href": "/components/modal" },
            { "title": "Tabs", "href": "/components/tabs" },
            { "title": "Tooltips", "href": "/components/tooltips" }
          ]
        },
        {
          "title": "Forms",
          "icon": "forms",
          "children": [
            { "title": "Text Box", "href": "/forms/text-box" },
            { "title": "Text Area", "href": "/forms/text-area" },
            { "title": "Select", "href": "/forms/select" },
            { "title": "File", "href": "/forms/file" },
            { "title": "Validation", "href": "/forms/validation" }
          ]
        },
        {
          "title": "Tables",
          "icon": "tables",
          "children": [
            { "title": "Basic Tables", "href": "/tables/basic" },
            { "title": "DataTables", "href": "/tables/datatables" }
          ]
        },
        { "title": "Icons", "icon": "icons", "href": "/icons" },
        { "title": "Charts", "icon": "charts", "href": "/charts" }
      ]
    }
  ]
}
