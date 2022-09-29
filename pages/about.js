import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Section from 'components/section'
import SectionBody from 'components/section-body'
import IconHedding from 'components/icon-hedding'
import Image from 'next/image'
import eyecatch from 'images/top_img.png'
import styles from 'styles/index.module.css'
import Button from 'components/button'
import Grid from 'components/grid'
import Box from 'components/box'
import Card from 'components/card'
import Describe from 'components/describe'

export default function About() {
  return (
    <Container>
      <figure className={styles.fullWidth}>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="100vw"
          placeholder='blur'
          style={{ transition: '0.2s' }}
        />
      </figure>
      <Section>
        <Grid rows='grid2'>
          <h2>すべての子どもたちが<br />自分らしい一歩を<br />踏み出せるように</h2>
        </Grid>
        <SectionBody>
          私たちは学校に行きたくない子どもたちに、居心地の良い学びの場を提供する活動をしています。たとえ学校の学びのスタイルが合わなくても、誰もが自分らしく学び、成長していくことができるように。Unippoという名前には「子どもたちにユニークな一歩を踏み出してほしい」という願いが込められています。
        </SectionBody>
      </Section>
      <Section fullWidth>
        <IconHedding color='blue' borderOff>私たちの向き合う社会課題</IconHedding>
        <SectionBody centerOn>
          学校に行きたくない子たちの学び場の選択肢の不足
        </SectionBody>
        <Grid rows = 'grid2'>
          <Describe imgOn img='/testimg_001.png' radiusOn>
          </Describe>
          <Describe radiusOn>
            <div>
              本当は学校に行きたい<br />
              様々な事情により、学校に行きたくてもいけない子どもたちがたくさんいます。<br />
              しかし、学校の教室以外の学びの選択肢が不足している現状があります。<br />
              学校に行けないことで、学びと成長の機会が損なわれてしまうことは、子どもたちの将来に大きな影響を及ぼすことになります。<br />
            </div>
          </Describe>
        </Grid>
      </Section>
      <Section>
        <Grid rows = 'grid2'>
          <Describe imgOn img='/testimg_001.png'>
          </Describe>
          <Describe>
            <div>
              本当は学校に行きたい<br />
              様々な事情により、学校に行きたくてもいけない子どもたちがたくさんいます。<br />
              しかし、学校の教室以外の学びの選択肢が不足している現状があります。<br />
              学校に行けないことで、学びと成長の機会が損なわれてしまうことは、子どもたちの将来に大きな影響を及ぼすことになります。<br />
            </div>
          </Describe>
        </Grid>
      </Section>
      <Section fullWidth color='green'>
        <IconHedding color='red' borderOff>私たちのミッション</IconHedding>
        <SectionBody centerOn>
          学校に行きたくない子たちの学び場の選択肢の不足
        </SectionBody>
        <Grid rows = 'grid2'>
          <Describe imgOn img='/testimg_001.png' radiusOn>
          </Describe>
          <Describe radiusOn>
            <div>
              安全・安心の確保<br />
              様々な事情により、学校に行きたくてもいけない子どもたちがたくさんいます。<br />
              しかし、学校の教室以外の学びの選択肢が不足している現状があります。<br />
              学校に行けないことで、学びと成長の機会が損なわれてしまうことは、子どもたちの将来に大きな影響を及ぼすことになります。<br />
            </div>
          </Describe>
        </Grid>
      </Section>
      <Section>
        <Grid rows = 'grid2'>
          <Describe imgOn img='/testimg_001.png'>
          </Describe>
          <Describe>
            <div>
              本当は学校に行きたい<br />
              様々な事情により、学校に行きたくてもいけない子どもたちがたくさんいます。<br />
              しかし、学校の教室以外の学びの選択肢が不足している現状があります。<br />
              学校に行けないことで、学びと成長の機会が損なわれてしまうことは、子どもたちの将来に大きな影響を及ぼすことになります。<br />
            </div>
          </Describe>
        </Grid>
      </Section>
      <Section fullWidth color='red'>
        <IconHedding color='yellow' borderOff>私たちのビジョン</IconHedding>
        <SectionBody centerOn>
          誰もが自分らしく学べる社会に
        </SectionBody>
        <div style={{maxWidth:'600px',margin:'0 auto'}}>
          <Image
            src={eyecatch}
            alt=""
            layout="responsive"
            sizes="100vw"
            placeholder='blur'
            style={{ transition: '0.2s' }}
          />
          <div style={{backgroundColor:'white',padding:'var(--space-xs)'}}>
            子どもだけではなく、大人になってからも、自分の個性や才能に合う学びの機会が、いつもあたりまえのように存在している。
            そのような社会を、私たちは目指していきたいと考えています。
            私たちの活動が、そのような社会を実現するための小さくとも大きな一歩であると信じています。
          </div>
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
    </Container>
  )
}
