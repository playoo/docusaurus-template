import React from 'react';
import Layout from '@theme/Layout';

function ThoughtItem({ date, children }) {
  return (
    <div style={{ marginBottom: '2rem', padding: '1rem', borderLeft: '4px solid var(--ifm-color-primary)' }}>
      <div style={{ fontSize: '0.9rem', color: 'gray' }}>{date}</div>
      <div>{children}</div>
    </div>
  );
}

export default function Thoughts() {
  return (
    <Layout title="碎碎念" description="我的日常想法记录">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <h1>💭 碎碎念</h1>
        <ThoughtItem date="2024-02-20">
          <p>今天的天气真好，阳光洒在键盘上，写代码都变得惬意了。</p>
        </ThoughtItem>
        <ThoughtItem date="2024-02-19">
          <p>刚刚发现 Docusaurus 的自定义页面功能真的很强大。</p>
        </ThoughtItem>
      </div>
    </Layout>
  );
}
