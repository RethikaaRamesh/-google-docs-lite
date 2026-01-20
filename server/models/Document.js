const documents = {};

function getDocument(docId) {
  if (!documents[docId]) {
    documents[docId] = "";
  }
  return documents[docId];
}

// Simplified CRDT (Last-write-wins)
function updateDocument(docId, content) {
  documents[docId] = content;
}

module.exports = { getDocument, updateDocument };
