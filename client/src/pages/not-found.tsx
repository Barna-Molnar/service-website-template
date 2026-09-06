import { Link } from "wouter";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { config } from "@/config";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-6">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6 text-center">
          <div className="flex flex-col items-center gap-3 mb-4">
            <AlertCircle className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Page not found</h1>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link href="/">
            <Button className="btn-hover-modern-light">
              Return to {config.brand.name}
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
