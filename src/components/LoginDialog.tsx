import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LoginDialog = ({ open, onOpenChange }: LoginDialogProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        toast.success("Successfully logged in!");
        onOpenChange(false);
        setEmail("");
        setPassword("");
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-heritage-cream border-4 border-heritage-gold">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl text-heritage-burgundy text-center">
            Login to YantraVeda
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleLogin} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="font-heading text-heritage-brown">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              className="bg-heritage-parchment border-2 border-heritage-bronze focus:border-heritage-gold"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="font-heading text-heritage-brown">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              minLength={6}
              className="bg-heritage-parchment border-2 border-heritage-bronze focus:border-heritage-gold"
            />
          </div>
          
          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
          
          <p className="text-sm text-heritage-brown/70 text-center font-body">
            Demo: Use any email and password (min 6 characters)
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
