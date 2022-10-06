import Container from 'components/container'
import PostHeader from 'components/post-header'
import Image from 'next/image'
import PostBody from 'components/post-body'


export default function Accessory({
  title='レジンでアクセサリーづくり【平日日中の居場所】',
  publish='2022-09-30',
  content='',
  eyecatch,
  categories,
}) {
  return (
    <Container>
      <article>
        <PostHeader title={title} subtitle="Blog Article" publish={publish} />
        <figure>
          <Image
            src='/card_01.JPG'
            alt=''
            layout='responsive'
            width={1920}
            height={1005}
            sizes='(min-width: 1152px) 1152px, 100vw'
            objectFit='cover'
            priority
          />
        </figure>
        <PostBody>{content}</PostBody>
      </article>
    </Container>
  )
}
