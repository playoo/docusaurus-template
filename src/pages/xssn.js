import React, { useState } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './xssn.module.css'; // 我们稍后会创建这个 CSS 模块

// 碎碎念数据 - 可以单独放在一个文件中
const thoughtsData = [
    {
    date: '2026-02-22',
    time: '7:30',
    content: '早起去买鸡蛋🥚，7:30分便利店已经开门了，很好！',
    mood: '😊',
    tags: ['心情']
  },
  {
    date: '2026-02-21',
    time: '23:30',
    content: '碎碎念开始记录咯，美好的一天又要结束了，这不，又下班了！😊！',
    mood: '🙃',
    tags: ['心情']
  },
  {
    date: '2024-02-20',
    time: '14:30',
    content: '今天的天气真好，阳光洒在键盘上，写代码都变得惬意了。',
    mood: '😊',
    tags: ['日常', '心情']
  },
  {
    date: '2024-02-19',
    time: '22:15',
    content: '刚刚发现 Docusaurus 的自定义页面功能真的很强大。',
    mood: '💡',
    tags: ['技术']
  },
  {
    date: '2024-02-18',
    time: '09:20',
    content: '推荐一本最近在读的书：《清醒思考的艺术》 - 关于思维误区的科普，很有意思。',
    mood: '📚',
    tags: ['阅读']
  },
  {
    date: '2024-02-17',
    time: '20:45',
    content: '今天尝试用 TailwindCSS 重构了一个老项目，开发体验真好！',
    mood: '⚡',
    tags: ['技术', '前端']
  }
];

// 获取所有标签
const allTags = [...new Set(thoughtsData.flatMap(item => item.tags))];

function ThoughtItem({ thought }) {
  return (
    <div className={styles.thoughtItem}>
      <div className={styles.thoughtHeader}>
        <span className={styles.thoughtDate}>
          {thought.date} <span className={styles.thoughtTime}>{thought.time}</span>
        </span>
        <span className={styles.thoughtMood}>{thought.mood}</span>
      </div>
      
      <div className={styles.thoughtContent}>
        {thought.content}
      </div>
      
      {thought.tags && thought.tags.length > 0 && (
        <div className={styles.thoughtTags}>
          {thought.tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
}

function TagFilter({ tags, activeTag, onTagClick }) {
  return (
    <div className={styles.tagFilter}>
      <button 
        onClick={() => onTagClick(null)}
        className={clsx(styles.filterButton, !activeTag && styles.active)}
      >
        全部
      </button>
      {tags.map(tag => (
        <button
          key={tag}
          onClick={() => onTagClick(tag)}
          className={clsx(styles.filterButton, activeTag === tag && styles.active)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

export default function Thoughts() {
  const [activeTag, setActiveTag] = useState(null);
  
  // 根据选中的标签过滤碎碎念
  const filteredThoughts = activeTag
    ? thoughtsData.filter(thought => thought.tags.includes(activeTag))
    : thoughtsData;

  // 按日期倒序排列
  const sortedThoughts = [...filteredThoughts].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  return (
    <Layout title="碎碎念" description="我的日常想法记录">
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.titleIcon}>💭</span> 
          碎碎念
          <span className={styles.thoughtCount}>{thoughtsData.length} 条记录</span>
        </h1>

        {allTags.length > 0 && (
          <TagFilter 
            tags={allTags} 
            activeTag={activeTag}
            onTagClick={setActiveTag}
          />
        )}

        <div className={styles.timeline}>
          {sortedThoughts.map((thought, index) => (
            <ThoughtItem key={index} thought={thought} />
          ))}
        </div>

        {filteredThoughts.length === 0 && (
          <div className={styles.emptyState}>
            没有找到相关的碎碎念~
          </div>
        )}
      </div>
    </Layout>
  );
}
