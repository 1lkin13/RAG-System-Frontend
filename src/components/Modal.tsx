interface ModalProps {
  showModal: boolean
  onClose: () => void
  onClearDB: () => void
  dbData: any
}

export default function Modal({ showModal, onClose, onClearDB, dbData }: ModalProps) {
  if (!showModal) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-xs sm:max-w-2xl lg:max-w-4xl w-full max-h-[90vh] sm:max-h-[80vh] overflow-hidden shadow-2xl border border-slate-700/50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <span className="text-white text-sm font-bold">📊</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Bütün Baza</h3>
          </div>
          
          {/* X Button */}
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white transition-all duration-200 flex items-center justify-center group"
          >
            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="mb-6 flex-1 overflow-hidden">
          {dbData ? (
            <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30 h-full overflow-y-auto max-h-[50vh] sm:max-h-[60vh]">
              <pre className="text-xs sm:text-sm text-slate-300 whitespace-pre-wrap leading-relaxed">{JSON.stringify(dbData, null, 2)}</pre>
            </div>
          ) : (
            <div className="flex items-center justify-center py-12">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
                <p className="text-slate-400 text-sm sm:text-base">Baza yüklənilir...</p>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-end">
          <button 
            onClick={onClearDB} 
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl font-medium transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-red-500/25 group"
          >
            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            <span>Bazanı Sil</span>
          </button>
        </div>
      </div>
    </div>
  )
}
