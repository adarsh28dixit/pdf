import React from 'react';
import { primary45 } from '../utils/colors';
import { useIsSmallScreen } from '../hooks/useIsSmallScreen';
import addSignature from '.././assets/addsignature.png'
import drawSignature from '.././assets/drawsignature.png'
import uploadFile from '../assets/uplodfile.png'

export function HowToUseSteps() {
    const isSmallScreen = useIsSmallScreen();

    const styles = {
        container: {
            color: '#666',
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "3rem",
        },
        background: {

        },
        header: {
            textAlign: "center",
        },
        body: {

        },
        heading: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
        },
        subHeading: {
            fontSize: '1.2rem',
            fontWeight: '600',
        },
        stepHeading: {
            fontSize: '1.8rem',
            fontWeight: '600',
            marginTop: "2rem",
        },
        stepSubHeading: {
            fontSize: '1.2rem',
            fontWeight: '500',
        },
        image: {
            width: "80%",
            marginTop: "2rem",
        }
    };



    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <div style={styles.heading}>How To Sign PDF</div>
                <div style={styles.subHeading}>Below we show how to add your signature to a PDF document</div>
            </div>
            <div style={styles.body}>
                <div style={styles.stepHeading}>1. Select your PDF document</div>
                <div style={styles.stepSubHeading}>Click on 'Drop or Upload PDF here' to choose a file.</div>
                <img style={styles.image} src={uploadFile} alt='' />
                <div style={styles.stepHeading}>2. Create a signature</div>
                <div style={styles.stepSubHeading}>Click on 'Add signature' and draw the signature of your choice.</div>
                <img style={styles.image} src={addSignature} alt='' />
                <img style={styles.image} src={drawSignature} alt='' />
                <div style={styles.stepHeading}>3. Save document</div>
                <div style={styles.stepSubHeading}>Click on 'Download'.</div>
                <img style={styles.image} src={addSignature} alt='' />
            </div>

        </div>
    );
}
