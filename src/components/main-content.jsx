import '../styles/main-contents.css';
import { ResumeForms } from './resume-forms.jsx';
import { ResumeDisplay } from './resume-display.jsx';

export function MainContent () {
  return (
    <div className="main-content">
      <ResumeForms />
      <ResumeDisplay />
    </div>
  )
}