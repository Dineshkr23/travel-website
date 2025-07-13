import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gauge, Clock, Zap, HardDrive } from "lucide-react";

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  networkRequests: number;
  bundleSize: number;
}

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    networkRequests: 0,
    bundleSize: 0
  });

  useEffect(() => {
    // Measure page load time
    if (performance && performance.timing) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      setMetrics(prev => ({ ...prev, loadTime }));
    }

    // Measure memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = memory.usedJSHeapSize / memory.jsHeapSizeLimit * 100;
      setMetrics(prev => ({ ...prev, memoryUsage }));
    }

    // Count network requests
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const networkRequests = entries.filter(entry => entry.entryType === 'resource').length;
      setMetrics(prev => ({ ...prev, networkRequests }));
    });

    observer.observe({ entryTypes: ['resource'] });

    // Estimate bundle size (this would be more accurate with webpack bundle analyzer)
    const estimatedBundleSize = 500; // KB
    setMetrics(prev => ({ ...prev, bundleSize: estimatedBundleSize }));

    return () => observer.disconnect();
  }, []);

  const getPerformanceStatus = (loadTime: number) => {
    if (loadTime < 1000) return { status: "Excellent", color: "bg-green-500" };
    if (loadTime < 2000) return { status: "Good", color: "bg-yellow-500" };
    return { status: "Needs Improvement", color: "bg-red-500" };
  };

  const performanceStatus = getPerformanceStatus(metrics.loadTime);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="w-80 bg-white/95 backdrop-blur-sm border-gray-200 shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Performance Monitor
            <Badge className={`text-xs ${performanceStatus.color}`}>
              {performanceStatus.status}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              <span>Load Time</span>
            </div>
            <span className="font-mono">{metrics.loadTime}ms</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-green-500" />
              <span>Memory Usage</span>
            </div>
            <span className="font-mono">{metrics.memoryUsage.toFixed(1)}%</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-purple-500" />
              <span>Bundle Size</span>
            </div>
            <span className="font-mono">{metrics.bundleSize}KB</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceMonitor; 