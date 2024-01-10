import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/react'
import HeaderLogo from '../src/components/HeaderLogo'

describe('Header Logo', () => {
  test('should add two numbers', () => {
    render(
      <HeaderLogo />
    )
  })
})
