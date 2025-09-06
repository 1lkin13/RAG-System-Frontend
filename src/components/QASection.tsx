interface QASectionProps {
  question: string
  setQuestion: (question: string) => void
  isStreaming: boolean
  onQA: () => void
  qaResult: string
}

export default function QASection({ question, setQuestion, isStreaming, onQA, qaResult }: QASectionProps) {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6 sm:mb-8">Sual Ver</h2>
      <div className="space-y-6 sm:space-y-8">
        <div className="relative">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Bilik bazanız haqqında RAG-ə sual verin..."
            className="w-full h-40 sm:h-48 lg:h-60 p-4 sm:p-6 lg:p-8 pr-20 sm:pr-24 lg:pr-28 bg-gray-800/50 border border-gray-600 rounded-2xl sm:rounded-3xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none text-base sm:text-lg lg:text-xl"
          />
          
          {/* Send Button Inside Textarea */}
          <button
            onClick={onQA}
            disabled={isStreaming || !question.trim()}
            className="absolute bottom-3 sm:bottom-4 lg:bottom-6 right-3 sm:right-4 lg:right-6 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-xl sm:rounded-2xl font-medium transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 disabled:shadow-none disabled:opacity-50 group"
          >
            {isStreaming ? (
              <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Answer */}
      {qaResult && (
        <div className="mt-8 sm:mt-10 lg:mt-12 p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-2xl sm:rounded-3xl">
          <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-300 mb-4 sm:mb-6">Cavab:</div>
          <div className="text-white text-base sm:text-lg lg:text-xl xl:text-2xl whitespace-pre-wrap leading-relaxed">
            {qaResult}
          </div>
        </div>
      )}
    </div>
  )
}
