'use client';

import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useState } from 'react';
import { signIn } from 'next-auth/react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/src/layouts/auth-layout';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const submit: FormEventHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false, // Prevent automatic redirect
      });

      if (result?.error) {
        setError(result.error);
      } else {
        // Redirect to the dashboard or home page after successful login
        window.location.href = '/dashboard';
      }
    } catch (err) {
        console.log(err);
        
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout title="Log in to your account" description="Enter your email and password below to log in">
      <form className="flex flex-col gap-6" onSubmit={submit}>
        <div className="grid gap-6">
          {/* Email Input */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              required
              autoFocus
              tabIndex={1}
              autoComplete="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
            <InputError message={error || ''} />
          </div>

          {/* Password Input */}
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <TextLink href="/forgot-password" className="ml-auto text-sm" tabIndex={5}>
                Forgot password?
              </TextLink>
            </div>
            <Input
              id="password"
              type="password"
              required
              tabIndex={2}
              autoComplete="current-password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
            <InputError message={error || ''} />
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center space-x-3">
            <Checkbox
              id="remember"
              name="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(!!checked)}
              tabIndex={3}
              disabled={isLoading}
            />
            <Label htmlFor="remember">Remember me</Label>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="mt-4 w-full" tabIndex={4} disabled={isLoading}>
            {isLoading && <LoaderCircle className="h-4 w-4 animate-spin mr-2" />}
            Log in
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
}