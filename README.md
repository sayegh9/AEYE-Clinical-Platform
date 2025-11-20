# AEYE Clinical Platform

AEYE is an advanced clinical decision-support tool designed for ophthalmologists, specifically focusing on refractive surgery and keratoconus assessment. It leverages AI to assist in diagnostics, surgical planning, and patient follow-up.

## Features

*   **Core Workflow**: Streamlined process from patient dashboard to final report.
    *   **Dashboard**: Overview of patient assessments.
    *   **New Assessment**: Start a new patient evaluation.
    *   **Upload Files**: Securely upload tomography and other imaging files.
    *   **History Extraction**: AI-assisted extraction of patient history.
    *   **Tomography Analysis**: Detailed analysis of corneal imaging.
    *   **Final Report**: Comprehensive report generation.
    *   **Agentic Workflow**: Automated workflow orchestration.
    *   **Follow-Up Assistant**: Context-aware AI chat assistant for discussing specific modules.

*   **Advanced Diagnostics**:
    *   Epithelial Thickness Map (ETM)
    *   Progression Tracker
    *   Biomechanical Analysis
    *   Post-Surgical Evaluation
    *   Quality Control & Safety Flags
    *   Heatmap Parsing
    *   Cross-Device Harmonization

*   **Surgical Planning**:
    *   Surgical Planning Assistant
    *   CXL Planning Module
    *   Counseling Score
    *   Population Analytics

*   **Utility Tools**:
    *   EMR Export
    *   Patient Education
    *   Batch Processing

## Tech Stack

*   **Frontend**: React, TypeScript, Vite
*   **Styling**: Tailwind CSS
*   **Icons**: Lucide React

## Getting Started

### Prerequisites

*   Node.js (v16 or higher)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd AEYE-Clinical-Platform
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Application

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Usage

1.  **Sidebar Navigation**: Use the collapsible sidebar to navigate between different modules.
2.  **Follow-Up Assistant**: Click the "Follow-Up Assistant" button in the header to open a chat interface relevant to the current screen.
3.  **Dark Mode**: Toggle between light and dark themes using the sun/moon icon in the header.

## License

[License Name]
