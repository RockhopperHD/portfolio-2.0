
import React, { useEffect } from 'react';
import SubPageLayout from './SubPageLayout';

const KernelsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <SubPageLayout title="Kernels" subtitle="Coming soon!">
            <div className="text-center text-lg text-light-text/80 py-20">
                <p>I'll put my blog here... eventually.</p>
            </div>
        </SubPageLayout>
    );
};

export default KernelsPage;
