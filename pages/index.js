import Hero from 'components/hero'
import Container from 'components/container'
import Section from 'components/section'
import PostBody from 'components/post-body'
import SectionBody from 'components/section-body'
import IconHedding from 'components/icon-hedding'
import Image from 'next/image'
import eyecatch from 'images/top_01.jpg'
import styles from 'styles/index.module.css'
import Button from 'components/button'
import Grid from 'components/grid'
import Box from 'components/box'
import Card from 'components/card'

export default function Home() {
  return (
    <Container>
      <figure className={styles.fullWidth}>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="100vw"
          height={700}
          objectFit='cover'
          placeholder='blur'
          style={{ transition: '0.2s' }}
        />
      </figure>
      <Section>
        <IconHedding color='yellow'>私たちについて</IconHedding>
        <SectionBody>
          私たちは学校に行きたくない子どもたちに、居心地の良い学びの場を提供する活動をしています。たとえ学校の学びのスタイルが合わなくても、誰もが自分らしく学び、成長していくことができる社会を目指しています。
        </SectionBody>
        <Button large>Unippoとは</Button>
      </Section>
      <Section fullWidth>
        <IconHedding color='blue'>お知らせ</IconHedding>
        <Grid rows = 'grid4'>
          <Box>【イベント開催】7/14(木)開催！教室開放「すきなことをシェアしよう」</Box>
          <Box>【イベント開催】7/14(木)開催！教室開放「すきなことをシェアしよう」</Box>
          <Box>【イベント開催】7/14(木)開催！教室開放「すきなことをシェアしよう」</Box>
          <Box>【イベント開催】7/14(木)開催！教室開放「すきなことをシェアしよう」</Box>
        </Grid>
        <div style={{marginRight:'calc(var(--space-xs) * 0.5)'}}>
          <Button rightOn>お知らせ一覧</Button>
        </div>
      </Section>
      <Section>
        <IconHedding color='yellow'>活動の内容</IconHedding>
        <SectionBody>
          Unippoという名前には「子どもたちにユニークな一歩を踏み出してほしい」という願いが込められています。一人ひとりがもっている「やってみたい」という小さな心の火を、焦らず大切に育てていきたいと思います。
        </SectionBody>
        <Grid rows='grid2'>
          <Card title='学校外フリースクール' innerOn>
            学校施設を利用し安全で<br />豊かな放課後をつくる
          </Card>
          <Card title='学校外フリースクール' img='/card_02.jpg' innerOn>
            学校施設を利用し安全で<br />豊かな放課後をつくる
          </Card>
        </Grid>
      </Section>
      <Section fullWidth>
        <IconHedding color='blue'>教育コラム</IconHedding>
        <SectionBody>
          Unippoという名前には「子どもたちにユニークな一歩を踏み出してほしい」という願いが込められています。一人ひとりがもっている「やってみたい」という小さな心の火を、焦らず大切に育てていきたいと思います。
        </SectionBody>
        <Grid rows = 'grid3'>
          <Box>【イベント開催】7/14(木)開催！教室開放「すきなことをシェアしよう」</Box>
          <Box>【イベント開催】7/14(木)開催！教室開放「すきなことをシェアしよう」</Box>
          <Box>【イベント開催】7/14(木)開催！教室開放「すきなことをシェアしよう」</Box>
        </Grid>
        <div style={{marginRight:'calc(var(--space-xs) * 0.5)'}}>
          <Button bars rightOn>コラム一覧</Button>
        </div>
      </Section>
      <Section fullWidth color='bgImg'>
        <IconHedding color='blue'>サポーターになる</IconHedding>
        <SectionBody>
          子どもたちの学び場の選択肢を増やすために、皆様のお力をお貸し下さい。
        </SectionBody>
        <Grid rows='grid2'>
          <Card>
            皆様からのご支援が子どもたちの笑顔を<br />生み出します。<br />応援をよろしくお願いいたします。
          </Card>
          <Card title='スタッフとして支援'>
            皆様からのご支援が子どもたちの笑顔を<br />生み出します。<br />応援をよろしくお願いいたします。
          </Card>
        </Grid>
      </Section>
      <Section>
        <IconHedding color='yellow'>私たちも応援しています</IconHedding>
        <Grid rows='grid4'>
          <Box circleOn centerOn>山田雄太さん</Box>
          <Box circleOn centerOn>三原奈央さん</Box>
          <Box circleOn centerOn>海老沢穣さん</Box>
          <Box circleOn centerOn>青木智宏さん</Box>
        </Grid>
        <div style={{marginRight:'calc(var(--space-xs) * 0.5)'}}>
          <Button rightOn>応援メッセージを見る</Button>
        </div>
      </Section>
    </Container>
  )
}
