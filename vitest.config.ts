import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'jsdom',
        coverage: {
            include: ['src/**/App.tsx'],
            thresholds:{
                lines: 80
            },
            reportOnFailure: true
        },
       reporters: ['junit'],
       outputFile: {
           junit: './junit-report.xml'
       }

    }
});