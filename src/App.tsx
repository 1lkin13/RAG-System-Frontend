import { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import UploadSection from './components/UploadSection'
import QASection from './components/QASection'
import Modal from './components/Modal'

function App() {
  const [content, setContent] = useState('')
  const [question, setQuestion] = useState('')
  const [loading, setLoading] = useState(false)
  const [uploadResult, setUploadResult] = useState('')
  const [qaResult, setQaResult] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [dbData, setDbData] = useState(null)
  const [activeTab, setActiveTab] = useState('upload')

  const handleUpload = async () => {
    if (!content.trim()) return
    setLoading(true)
    try {
      const res = await fetch('http://localhost:3001/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
      })
      const data = await res.json()
      setUploadResult(JSON.stringify(data, null, 2))
      setContent('')
    } catch (err) {
      alert('Xəta baş verdi')
    }
    setLoading(false)
  }

  const handleQA = async () => {
    if (!question.trim()) return
    setIsStreaming(true)
    setQaResult('')
    
    try {
      const res = await fetch('http://localhost:3001/qa/llm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      })
      const data = await res.json()
      setQaResult(data.answer)
      setIsStreaming(false)
    } catch (err) {
      alert('Xəta baş verdi')
      setIsStreaming(false)
    }
  }

  const loadDB = async () => {
    try {
      const res = await fetch('http://localhost:3001/query/all')
      const data = await res.json()
      setDbData(data)
      setShowModal(true)
    } catch (err) {
      alert('Baza yüklənə bilmədi')
    }
  }

  const clearDB = async () => {
    if (!confirm('Bütün bazanı silmək istəyirsiniz?')) return
    try {
      await fetch('http://localhost:3001/query/all', { method: 'DELETE' })
      setDbData(null)
      setShowModal(false)
    } catch (err) {
      alert('Xəta baş verdi')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 relative overflow-hidden">
      {/* Background Noise Effect */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10">
        <Header 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onLoadDB={loadDB} 
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16">
          <HeroSection />

          <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-12 border border-gray-600 shadow-2xl">
            {activeTab === 'upload' ? (
              <UploadSection
                content={content}
                setContent={setContent}
                loading={loading}
                onUpload={handleUpload}
                uploadResult={uploadResult}
              />
            ) : (
              <QASection
                question={question}
                setQuestion={setQuestion}
                isStreaming={isStreaming}
                onQA={handleQA}
                qaResult={qaResult}
              />
            )}
          </div>
        </div>

        <Modal
          showModal={showModal}
          onClose={() => setShowModal(false)}
          onClearDB={clearDB}
          dbData={dbData}
        />
      </div>
    </div>
  )
}

export default App