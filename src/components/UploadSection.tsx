interface UploadSectionProps {
  content: string
  setContent: (content: string) => void
  loading: boolean
  onUpload: () => void
  uploadResult: string
}

export default function UploadSection({ content, setContent, loading, onUpload, uploadResult }: UploadSectionProps) {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6 sm:mb-8">Məzmun Əlavə Et</h2>
      <div className="space-y-6 sm:space-y-8">
        <div className="relative">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="RAG-ə haqqında bilik əlavə etməyi deyin..."
            className="w-full h-40 sm:h-48 lg:h-60 p-4 sm:p-6 lg:p-8 pr-20 sm:pr-24 lg:pr-28 bg-gray-800/50 border border-gray-600 rounded-2xl sm:rounded-3xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none text-base sm:text-lg lg:text-xl"
          />
          
          {/* Send Button Inside Textarea */}
          <button
            onClick={onUpload}
            disabled={loading || !content.trim()}
            className="absolute bottom-3 sm:bottom-4 lg:bottom-6 right-3 sm:right-4 lg:right-6 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-xl sm:rounded-2xl font-medium transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-green-500/25 disabled:shadow-none disabled:opacity-50 group"
          >
            {loading ? (
              <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {uploadResult && (
        <div className="mt-8 sm:mt-10 lg:mt-12 p-4 sm:p-6 lg:p-8 bg-gray-800/50 rounded-2xl sm:rounded-3xl border border-gray-600">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 sm:mb-6">Nəticə</h3>
          <pre className="text-sm sm:text-base lg:text-lg text-gray-300 whitespace-pre-wrap overflow-x-auto">{uploadResult}</pre>
        </div>
      )}
    </div>
  )
}
