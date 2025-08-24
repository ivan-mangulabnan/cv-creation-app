import '../styles/main-contents.css';
import { ResumeForms } from './resume-display.jsx';
import { ResumeDisplay } from './resume-forms.jsx';

export function MainContent () {
  return (
    <div className="main-content">
      <ResumeForms />
      <ResumeDisplay />
    </div>
  )
}