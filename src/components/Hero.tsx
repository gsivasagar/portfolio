import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section id="about" className="section" style={{ scrollMarginTop: '6rem' }}>
            <div className="mobile-section-header">About</div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
                <p>
                    Back in 2022, I started exploring the mechanics of how complex software systems operate under the hood. Fast forward to today, and I've had the privilege of architecting solutions ranging from <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>real-time financial synchronization engines</span> to <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>AI-powered recruitment simulators</span>.
                </p>

                <p>
                    My main focus these days is building <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>fault-tolerant microservices</span> and rigorous data processing pipelines. I enjoy the challenge of bridging the gap between cutting-edge AI architectures (like LangGraph and Vector Databases) and robust, production-ready enterprise backends.
                </p>

                <p>
                    When I'm not carefully constructing database schemas or debugging state machines, I'm usually solving algorithmic challenges on LeetCode, optimizing my personal workflows, or continuing my lifelong pursuit of learning new system design strategies.
                </p>

            </motion.div>
        </section>
    );
};

export default Hero;
