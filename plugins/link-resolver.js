export default function(doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'home') {
    return '/'
  }

  if (doc.type === 'gallery') {
    return '/gallery'
  }

  if (doc.type === "press") {
    return "/press/" + doc.uid;
  }
  return "/not-found";

}
