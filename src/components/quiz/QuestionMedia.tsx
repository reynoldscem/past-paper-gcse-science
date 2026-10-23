import { highwayCodeReferenceUrl } from '../../data/drivingReferences';
import { useState } from 'react';
import type { Question } from '../../types';

export function QuestionImage({ question }: { question: Question }) {
  const [failedSource, setFailedSource] = useState<string | null>(null);
  if (!question.image) return null;
  return <figure className="mb-6">
    {failedSource === question.image.src ? <p role="alert" className="p-4 bg-amber-900 rounded-xl">Image unavailable. Description: {question.image.alt}</p> :
      <div className="rounded-xl bg-white p-5 flex justify-center">
        <img src={question.image.src} alt={question.image.alt} onError={() => setFailedSource(question.image!.src)} className="max-h-64 max-w-full object-contain" />
      </div>}
    <figcaption className="text-xs text-navy-400 mt-2">© Crown copyright · <a className="underline" href="/driving/manifest.json" target="_blank" rel="noreferrer">Image sources / OGL v3.0</a></figcaption>
  </figure>;
}

export function QuestionExplanation({ question }: { question: Question }) {
  return <div className="mt-5 bg-navy-800/50 rounded-lg p-4 border-l-4 border-accent text-sm text-navy-200 leading-relaxed">
    <p>{question.explanation}</p>
    <a href={question.highwayCodeRule ? highwayCodeReferenceUrl(question.highwayCodeRule, question.learnMoreUrl) : question.learnMoreUrl} target="_blank" rel="noreferrer" className="inline-block mt-2 text-accent-light underline">
      {question.highwayCodeRule ? `Highway Code — ${/^(Annex|Introduction)/.test(question.highwayCodeRule) ? '' : 'Rule '}${question.highwayCodeRule}` : 'Read more'} ↗
    </a>
  </div>;
}
