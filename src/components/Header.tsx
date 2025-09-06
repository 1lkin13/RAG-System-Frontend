
interface HeaderProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  onLoadDB: () => void
}

export default function Header({ activeTab, setActiveTab, onLoadDB }: HeaderProps) {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between px-4 sm:px-6 lg:px-12 py-4 sm:py-6 lg:py-8 gap-4 lg:gap-0">
      <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-2xl flex items-center justify-center">
          <span className="text-white text-lg sm:text-xl lg:text-2xl font-bold">Zero</span>
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Zero AI</h1>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg hidden sm:block">PsVector ilə idarə olunan bilik bazası</p>
        </div>
      </div>
      
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-6 w-full lg:w-auto">
        {/* Upload Button */}
        <button 
          onClick={() => setActiveTab('upload')}
          className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 flex-1 sm:flex-none flex items-center gap-2 ${
            activeTab === 'upload' 
              ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40' 
              : 'text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-green-500/10 hover:to-green-600/10 border border-green-500/20 hover:border-green-500/40'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span className="hidden sm:inline">Məzmun Əlavə Et</span>
          <span className="sm:hidden">Əlavə Et</span>
        </button>

        {/* QA Button */}
        <button 
          onClick={() => setActiveTab('qa')}
          className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 flex-1 sm:flex-none flex items-center gap-2 ${
            activeTab === 'qa' 
              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40' 
              : 'text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-blue-600/10 border border-blue-500/20 hover:border-blue-500/40'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Sual Ver
        </button>

        {/* Database Button */}
        <button 
          onClick={onLoadDB} 
          className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-gradient-to-r from-purple-500/20 to-purple-600/20 hover:from-purple-500/30 hover:to-purple-600/30 text-purple-300 hover:text-purple-200 rounded-xl sm:rounded-2xl transition-all duration-300 backdrop-blur-sm text-sm sm:text-base lg:text-lg font-medium flex-1 sm:flex-none flex items-center gap-2 border border-purple-500/30 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
          </svg>
          <span className="hidden sm:inline">Bütün Baza</span>
          <span className="sm:hidden">Baza</span>
        </button>
      </div>
    </div>
  )
}
