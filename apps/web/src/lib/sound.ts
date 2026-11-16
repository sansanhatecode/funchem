'use client'

import { useSyncExternalStore } from 'react'

/**
 * Âm thanh phản hồi ngắn, tổng hợp bằng Web Audio nên không cần tải file.
 * Người dùng tắt được; lựa chọn lưu ở trình duyệt.
 */
const KEY = 'funchem:muted'
const listeners = new Set<() => void>()
let ctx: AudioContext | null = null

export function isMuted(): boolean {
  if (typeof window === 'undefined') return true
  try {
    return window.localStorage.getItem(KEY) === '1'
  } catch {
    return false
  }
}

export function setMuted(muted: boolean) {
  try {
    window.localStorage.setItem(KEY, muted ? '1' : '0')
  } catch {
    /* trình duyệt chặn localStorage: bỏ qua */
  }
  listeners.forEach((l) => l())
}

export function useMuted(): boolean {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb)
      return () => listeners.delete(cb)
    },
    isMuted,
    () => true,
  )
}

const TUNES: Record<'correct' | 'wrong' | 'complete', { freq: number; at: number; dur: number }[]> =
  {
    correct: [
      { freq: 660, at: 0, dur: 0.09 },
      { freq: 880, at: 0.09, dur: 0.14 },
    ],
    wrong: [
      { freq: 300, at: 0, dur: 0.12 },
      { freq: 220, at: 0.12, dur: 0.18 },
    ],
    complete: [
      { freq: 523, at: 0, dur: 0.11 },
      { freq: 659, at: 0.11, dur: 0.11 },
      { freq: 784, at: 0.22, dur: 0.11 },
      { freq: 1047, at: 0.33, dur: 0.26 },
    ],
  }

export function playSound(kind: keyof typeof TUNES) {
  if (isMuted()) return
  try {
    ctx ??= new AudioContext()
    if (ctx.state === 'suspended') void ctx.resume()
    const start = ctx.currentTime
    for (const note of TUNES[kind]) {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = kind === 'wrong' ? 'triangle' : 'sine'
      osc.frequency.value = note.freq
      gain.gain.setValueAtTime(0.0001, start + note.at)
      gain.gain.exponentialRampToValueAtTime(0.16, start + note.at + 0.015)
      gain.gain.exponentialRampToValueAtTime(0.0001, start + note.at + note.dur)
      osc.connect(gain).connect(ctx.destination)
      osc.start(start + note.at)
      osc.stop(start + note.at + note.dur + 0.02)
    }
  } catch {
    /* thiết bị không hỗ trợ Web Audio: im lặng */
  }
}
