import { coreContent, allCoreContent } from 'pliny/utils/contentlayer.js'

export function allCoreContentNotFuture(contents) {
  //  const today = new Date().toISOString().split('T')[0];
  //  return contents
  //    .map((c) => coreContent(c))
  //    .filter((c) => 'date' in c && c.date <= today);
  return allCoreContent(contents)
}
