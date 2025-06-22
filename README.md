# Kanban Dashboard

A modern, responsive Kanban dashboard built with React and Tailwind CSS. This project provides a comprehensive project management interface with task tracking, team collaboration, and real-time statistics.

## Features

- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **Kanban Board**: Drag-and-drop task management with multiple columns
- **Team Management**: Track team members and their assignments
- **Statistics Dashboard**: Real-time project metrics and analytics
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

## Tech Stack

- **React 18**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Beautiful, customizable icons
- **Responsive Design**: Mobile-first approach

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd Resume.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm eject`: Ejects from Create React App (not recommended)

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Top navigation bar
│   ├── Sidebar.js         # Left sidebar navigation
│   ├── StatsCards.js      # Statistics dashboard cards
│   ├── KanbanBoard.js     # Main kanban board component
│   ├── KanbanColumn.js    # Individual column component
│   └── TaskCard.js        # Individual task card component
├── App.js                 # Main application component
├── index.js              # React entry point
└── index.css             # Global styles and Tailwind imports
```

## Features Overview

### Dashboard
- Welcome message with personalized greeting
- Key statistics cards showing project metrics
- Quick action buttons for task management

### Kanban Board
- **To Do**: Tasks that need to be started
- **In Progress**: Currently active tasks
- **Review**: Tasks under review or testing
- **Done**: Completed tasks

### Task Management
- Task cards with detailed information
- Priority levels (High, Medium, Low)
- Due dates and assignees
- Tags for categorization
- Drag-and-drop functionality (ready for implementation)

### Team Members
The project uses authentic Indian names:
- **Yaseen**: Project Manager
- **Priya**: Designer
- **Arjun**: DevOps Engineer
- **Meera**: Technical Writer
- **Kavya**: Mobile Developer
- **Rahul**: Backend Developer
- **Anjali**: UI/UX Designer
- **Vikram**: Database Engineer

## Customization

### Colors
The project uses a custom color palette defined in `tailwind.config.js`:
- Primary colors: Blue shades for main actions
- Gray scale: For text and backgrounds
- Status colors: Red (high priority), Yellow (medium), Green (low)

### Adding New Features
1. Create new components in the `src/components/` directory
2. Import and use them in the main `App.js` file
3. Add any new dependencies to `package.json`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Design inspiration from modern project management tools
- Icons provided by Lucide React
- Styling with Tailwind CSS 