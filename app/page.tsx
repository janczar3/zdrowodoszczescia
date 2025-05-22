import { sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import { allCoreContentNotFuture } from '@/layouts/post'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContentNotFuture(sortedPosts)
  return <Main posts={posts} />
}
