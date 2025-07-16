
'use client';

import { useState } from 'react';

export default function DocumentManager() {
  const [showUpload, setShowUpload] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const documents = [
    {
      id: 1,
      name: 'Passport',
      category: 'Identity',
      uploadDate: '2024-02-15',
      status: 'Verified',
      fileSize: '2.3 MB',
      type: 'PDF'
    },
    {
      id: 2,
      name: 'Academic Transcripts',
      category: 'Academic',
      uploadDate: '2024-02-10',
      status: 'Verified',
      fileSize: '1.8 MB',
      type: 'PDF'
    },
    {
      id: 3,
      name: 'Bank Statement',
      category: 'Financial',
      uploadDate: '2024-02-08',
      status: 'Pending Review',
      fileSize: '945 KB',
      type: 'PDF'
    },
    {
      id: 4,
      name: 'English Proficiency Test',
      category: 'Academic',
      uploadDate: '2024-01-25',
      status: 'Verified',
      fileSize: '1.2 MB',
      type: 'PDF'
    },
    {
      id: 5,
      name: 'Birth Certificate',
      category: 'Identity',
      uploadDate: '2024-01-20',
      status: 'Verified',
      fileSize: '756 KB',
      type: 'PDF'
    }
  ];

  const categories = ['Identity', 'Academic', 'Financial', 'Medical', 'Legal'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Verified':
        return 'bg-green-100 text-green-800';
      case 'Pending Review':
        return 'bg-yellow-100 text-yellow-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return 'ri-file-pdf-line text-red-500';
      case 'doc':
      case 'docx':
        return 'ri-file-word-line text-blue-500';
      case 'jpg':
      case 'jpeg':
      case 'png':
        return 'ri-image-line text-green-500';
      default:
        return 'ri-file-line text-gray-500';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Document Manager</h3>
        <button
          onClick={() => setShowUpload(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium !rounded-button"
        >
          Upload Document
        </button>
      </div>

      {/* Document Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-3 shadow-sm border text-center">
          <div className="text-xl font-bold text-blue-600">{documents.length}</div>
          <div className="text-xs text-gray-500">Total Documents</div>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm border text-center">
          <div className="text-xl font-bold text-green-600">
            {documents.filter(d => d.status === 'Verified').length}
          </div>
          <div className="text-xs text-gray-500">Verified</div>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm border text-center">
          <div className="text-xl font-bold text-yellow-600">
            {documents.filter(d => d.status === 'Pending Review').length}
          </div>
          <div className="text-xs text-gray-500">Pending</div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex overflow-x-auto space-x-2 pb-2">
        <button
          onClick={() => setSelectedCategory('')}
          className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
            selectedCategory === '' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700'
          } !rounded-button`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
              selectedCategory === category 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700'
            } !rounded-button`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Document List */}
      <div className="space-y-3">
        {documents
          .filter(doc => selectedCategory === '' || doc.category === selectedCategory)
          .map((document) => (
            <div key={document.id} className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-lg">
                  <i className={`${getFileIcon(document.type)} text-xl`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm">{document.name}</h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-gray-500">{document.category}</span>
                    <span className="text-xs text-gray-300">•</span>
                    <span className="text-xs text-gray-500">{document.fileSize}</span>
                    <span className="text-xs text-gray-300">•</span>
                    <span className="text-xs text-gray-500">{new Date(document.uploadDate).toLocaleDateString()}</span>
                  </div>
                  <div className="mt-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(document.status)}`}>
                      {document.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-blue-600">
                    <i className="ri-download-line text-lg"></i>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-600">
                    <i className="ri-delete-bin-line text-lg"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Upload Modal */}
      {showUpload && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Upload Document</h3>
              <button
                onClick={() => setShowUpload(false)}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Document Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter document name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">File</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                  <i className="ri-upload-cloud-line text-3xl text-gray-400 mb-2"></i>
                  <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500 mt-1">PDF, DOC, JPG, PNG (Max 10MB)</p>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" />
                </div>
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowUpload(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium !rounded-button"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium !rounded-button"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
