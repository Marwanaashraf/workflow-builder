# 🚀 Workflow Builder

A modern and interactive **Workflow Builder** built with **React**, **TypeScript**, and **React Flow**.  
This application allows users to visually create, edit, connect, and manage workflow nodes using an intuitive drag-and-drop interface.


---

## ✨ Features

- ➕ Add new workflow nodes
- ✏️ Edit existing nodes
- 🗑️ Delete nodes
- 🔗 Connect nodes with edges
- ❌ Delete edges with confirmation dialog
- 🎯 Three custom node types:
  - Start
  - Task
  - End
- 🖱️ Drag & Drop nodes freely
- 💾 Save workflow to Local Storage
- 📱 Responsive design
- 🔔 Toast notifications
- 🎨 Custom node components
- ⚡ Fast and lightweight UI

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React | UI Library |
| TypeScript | Type Safety |
| React Flow (@xyflow/react) | Workflow Editor |
| Context API | State Management |
| Formik | Form Handling |
| Tailwind CSS | Styling |
| React Toastify | Notifications |
| Lucide React | Icons |

---

## 📂 Project Structure

```text
src
│
├── components
│   ├── DetailsPanel
│   ├── FlowCanvas
│   ├── Header
│   └── utils
│
├── context
│   └── FlowContext.tsx
│
├── nodes
│   ├── StartNode.tsx
│   ├── TaskNode.tsx
│   └── EndNode.tsx
│
├── types
│   ├── node.ts
│   ├── edge.ts
│   └── form.ts
│
├── App.tsx
└── main.tsx
```



---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Marwanaashraf/workflow-builder
```

### 2. Navigate to the project

```bash
cd workflow-builder
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

---

## 🎮 Usage

### ➕ Add a Node

1. Click **Add Node**
2. Select the node type
3. Enter the node information
4. Click **Add Node**

---

### ✏️ Edit a Node

1. Click on any node
2. Update its information
3. Click **Update Node**

---

### 🔗 Connect Nodes

Drag from a node's **Source Handle** to another node's **Target Handle**.

---

### 🗑️ Delete a Node

1. Select a node
2. Click **Delete Node**

---

### ❌ Delete an Edge

1. Click on an edge
2. Confirm deletion from the popup dialog

---

### 💾 Save Workflow

Click the **Save** button to store the current workflow.

The workflow is automatically saved inside **Local Storage**.

---

## 💾 Local Storage

The application stores the following data:

```text
nodes
edges
```


---

## 🎯 Node Types

| Node | Description |
|------|-------------|
| 🟢 Start | Entry point of the workflow |
| 🔵 Task | Workflow task |
| 🔴 End | End point of the workflow |

---

## 📦 Main Libraries

- @xyflow/react
- formik
- react-toastify
- lucide-react


---

## 👨‍💻 Author

**Marwan Ashraf**

Frontend Developer

- GitHub: https://github.com/Marwanaashraf/workflow-builder
- LinkedIn: https://workflow-builder-theta-ten.vercel.app/

